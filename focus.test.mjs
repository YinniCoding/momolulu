import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';

// Exercise only the production clock/state functions, without rendering or emulating React/DOM.
const source = readFileSync(new URL('./client.js', import.meta.url), 'utf8');
const functions = source.slice(source.indexOf('    function remainingMs'), source.indexOf('    const selectCatalog'));
function clock(saved = null) {
  let now = 10000000;
  const disposals = [];
  const context = vm.createContext({
    Date: class extends Date { static now() { return now; } },
    storage: { save(value) { disposals.push(value); } },
  });
  vm.runInContext(functions + '\nthis.clock = { initialState, remainingMs, formatTime, start, pause, reset, tick, update, getSnapshot, subscribe, setReminders, init(value) { state = initialState(value); } };', context);
  const api = context.clock;
  api.init(saved);
  return { ...api, advance(ms) { now += ms; api.tick(now); }, saved: disposals };
}

test('default countdown, rounding, clamping and invalid saved state', () => {
  const c = clock({ minutes: -1, status: 'running', remaining: 'invalid' });
  assert.equal(c.getSnapshot().minutes, 25);
  assert.equal(c.formatTime(c.getSnapshot().remaining), '25:00');
  assert.equal(c.formatTime(1), '00:01');
  assert.equal(c.formatTime(-10), '00:00');
});
test('deadline stays accurate after throttled ticks and completion fires once', () => {
  const c = clock(); c.start(); c.advance(25 * 60000 + 3000);
  assert.equal(c.getSnapshot().status, 'done');
  assert.equal(c.getSnapshot().notice, 'finish');
  c.update({ notice: '' }); c.advance(5000);
  assert.equal(c.getSnapshot().notice, '');
});
test('pause/resume freezes focus and break clocks; both views share one source', () => {
  const c = clock(); let notifications = 0;
  const off = c.subscribe(() => notifications++);
  c.start(); c.advance(5 * 60000); c.pause();
  assert.equal(c.getSnapshot().remaining, 20 * 60000);
  assert.equal(c.getSnapshot().reminderRemaining, 15 * 60000);
  c.advance(10 * 60000); c.start();
  assert.equal(c.remainingMs(c.getSnapshot(), c.getSnapshot().now), 20 * 60000);
  assert.equal(c.getSnapshot().nextReminder - c.getSnapshot().now, 15 * 60000);
  assert(notifications > 0); off();
});
test('break reminder, snooze, reminders off and reset', () => {
  const c = clock(); c.reset(45); c.start(); c.advance(20 * 60000);
  assert.equal(c.getSnapshot().notice, 'break');
  c.update({ notice: '', nextReminder: c.getSnapshot().now + 10 * 60000 });
  c.advance(9 * 60000); assert.equal(c.getSnapshot().notice, '');
  c.advance(60000); assert.equal(c.getSnapshot().notice, 'break');
  c.update({ reminders: false, notice: '' }); c.advance(15 * 60000);
  assert.equal(c.getSnapshot().status, 'done'); assert.equal(c.getSnapshot().notice, '');
  c.reset(15); assert.equal(c.getSnapshot().remaining, 15 * 60000);
});
test('reminder attention timestamp is stable across ticks and renews after snooze', () => {
  const c = clock(); c.reset(60); c.start(); c.advance(20 * 60000);
  const first = c.getSnapshot().noticeAt;
  assert(first > 0); c.advance(3000);
  assert.equal(c.getSnapshot().noticeAt, first);
  assert.equal(c.getSnapshot().notice, 'break');
  c.update({ notice: '', nextReminder: c.getSnapshot().now + 10 * 60000 });
  c.advance(10 * 60000);
  assert(c.getSnapshot().noticeAt > first);
  assert.equal(c.getSnapshot().notice, 'break');
});

test('compact reminder label includes water/stand, countdown and clock time', () => {
  const code = source.slice(source.indexOf('    function reminderLabel'), source.indexOf('    const css'));
  const context = vm.createContext({ Date, t: (key) => key, formatTime: (ms) => String(ms / 60000) });
  vm.runInContext(code + '\nthis.label = reminderLabel;', context);
  const now = Date.now();
  assert.match(context.label({ reminders: true, status: 'running', now, deadline: now + 25 * 60000, nextReminder: now + 20 * 60000 }), /^waterStand · \d{2}:\d{2}$/);
  assert.equal(context.label({ reminders: false }), 'remindOffShort');
  assert.equal(context.label({ reminders: true, status: 'running', now, deadline: now + 15 * 60000, nextReminder: now + 20 * 60000 }), 'restAfterFocus');
});

test('enabling reminders while paused resets the resume interval consistently', () => {
  const c = clock(); c.start(); c.advance(5 * 60000); c.pause();
  c.setReminders(false); c.setReminders(true); c.advance(3 * 60000); c.start();
  assert.equal(c.getSnapshot().nextReminder - c.getSnapshot().now, 20 * 60000);
});

test('short focus finishes before the independent water reminder', () => {
  const c = clock(); c.reset(15); c.start();
  assert(c.getSnapshot().nextReminder > c.getSnapshot().deadline);
  c.advance(15 * 60000);
  assert.equal(c.getSnapshot().notice, 'finish');
});

test('weather codes, unavailable state and stale readings are explicit', () => {
  const code = source.slice(source.indexOf('    function weatherKind'), source.indexOf('    const css'));
  const context = vm.createContext({ t: (key) => key });
  vm.runInContext(code + '\nthis.weather = { weatherKind, weatherText };', context);
  for (const [value, expected] of [[0, 'clear'], [2, 'cloudy'], [45, 'fog'], [61, 'rain'], [85, 'snow'], [95, 'storm'], [999, 'unknownWeather']]) assert.equal(context.weather.weatherKind(value), expected);
  assert.equal(context.weather.weatherText({ weather: null, weatherState: 'error' }), 'weatherError');
  assert.match(context.weather.weatherText({ weather: { temperature: 20, code: 0, time: '2026-11-06T15:30' }, locationKey: 'nanjing', weatherState: 'error' }), /nanjing · 20°C · clear · stale 15:30/);
});

test('brightness is restored and bounded independently from visibility', () => {
  assert.equal(clock({ brightness: 999 }).getSnapshot().brightness, 180);
  assert.equal(clock({ brightness: 1 }).getSnapshot().brightness, 70);
  assert.equal(clock().getSnapshot().brightness, 122);
});

test('radar uses authoritative running status and excludes idle and child sessions', () => {
  const code = source.slice(source.indexOf('    function radarGroups'), source.indexOf('    const t ='));
  const context = vm.createContext({});
  vm.runInContext(code + '\nthis.group = radarGroups;', context);
  const catalog = { byId: {
    a: { id: 'a', running: true, updatedAt: 1 },
    b: { id: 'b', running: false, updatedAt: 3 },
    c: { id: 'c', running: false, updatedAt: 4 },
    d: { id: 'd', running: true, updatedAt: 5, origin: 'subagent' },
    e: { id: 'e', running: true, updatedAt: 6 },
  } };
  const statuses = new Map([['a', { running: false, completionUnread: true }], ['b', { running: true, completionUnread: true }], ['e', { running: true }]]);
  const groups = context.group(catalog, statuses);
  assert.equal(groups.running.map(row => row.id).join(','), 'e,b');
  assert.equal(groups.unread.map(row => row.id).join(','), 'a');
  statuses.set('a', { running: false, completionUnread: false });
  assert.equal(context.group(catalog, statuses).unread.length, 0);
});

test('radar recognizes pending permissions/input without invoking their answer methods', () => {
  const code = source.slice(source.indexOf('    function radarGroups'), source.indexOf('    const t ='));
  const context = vm.createContext({});
  vm.runInContext(code + '\nthis.api = { radarGroups, attentionSnapshot, newAttention };', context);
  const { radarGroups, attentionSnapshot, newAttention } = context.api;
  const catalog = { byId: { a: { id: 'a', running: true }, b: { id: 'b', running: true }, c: { id: 'c', retainedBy: { mainView: 1 } } } };
  const statuses = new Map([['a', { pendingInteraction: { key: 'p1', kind: 'approval', answer() { throw Error('Must not answer'); } } }], ['b', { pendingInteraction: { key: 'q1', kind: 'question' } }], ['c', { completionUnread: true }]]);
  const groups = radarGroups(catalog, statuses);
  assert.equal(groups.waiting.length, 2);
  assert.equal(groups.running.length, 0);
  assert.equal(groups.waiting.find(row => row.id === 'a').attentionKind, 'radarApproval');
  assert.equal(groups.waiting.find(row => row.id === 'b').attentionKind, 'radarQuestion');
  const baseline = attentionSnapshot(catalog, statuses);
  assert.equal(baseline.has('c'), false);
  assert.equal(newAttention(null, baseline), false);
  assert.equal(newAttention(baseline, attentionSnapshot(catalog, statuses)), false);
  statuses.set('a', { pendingInteraction: { key: 'p2', kind: 'approval' } });
  assert.equal(newAttention(baseline, attentionSnapshot(catalog, statuses)), true);
  statuses.delete('a'); statuses.delete('b');
  assert.equal(newAttention(baseline, attentionSnapshot(catalog, statuses)), false);
  statuses.set('a', { running: false, completionUnread: true });
  assert.equal(newAttention(new Map(), attentionSnapshot(catalog, statuses)), true);
});

test('running deadline and preferences restore without touching old timer keys', () => {
  const c = clock(); c.start(); c.advance(60000);
  const restored = clock(c.getSnapshot());
  assert.equal(restored.getSnapshot().deadline, c.getSnapshot().deadline);
  assert.equal(restored.getSnapshot().status, 'running');
  assert.equal(restored.getSnapshot().intensity, 45);
});
