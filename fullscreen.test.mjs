import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const source = readFileSync(new URL('./client.js', import.meta.url), 'utf8');
const code = source.slice(source.indexOf('    function createFullscreenControl'), source.indexOf('    let fullscreenControl;'));
function fixture({ reject = false, existing = false } = {}) {
  const context = vm.createContext({});
  vm.runInContext(code + '\nthis.create = createFullscreenControl;', context);
  let active = existing, resolve, enterCount = 0, exits = 0;
  const reports = [];
  const control = context.create({
    active: () => active,
    enter() { enterCount++; return reject ? Promise.reject(new Error('Denied')) : new Promise(r => { resolve = () => { active = true; r(); }; }); },
    exit() { exits++; active = false; return Promise.resolve(); },
    report: (...args) => reports.push(args),
  });
  return { control, reports, finish: () => resolve(), get active() { return active; }, get exits() { return exits; }, get enters() { return enterCount; }, escape() { active = false; control.changed(); } };
}
test('duplicate clicks share one pending request and do not exit fullscreen', async () => {
  const f = fixture(); const pending = f.control.enter(); f.control.enter();
  assert.equal(f.enters, 1); f.finish(); await pending;
  assert.equal(f.active, true); assert.equal(f.exits, 0);
});
test('explicit exit during request exits only once after request settles', async () => {
  const f = fixture(); const pending = f.control.enter(); f.control.exit(); f.finish(); await pending;
  assert.equal(f.active, false); assert.equal(f.exits, 1);
});
test('Esc never forces fullscreen back on', async () => {
  const f = fixture(); const pending = f.control.enter(); f.finish(); await pending; f.escape();
  assert.equal(f.enters, 1); assert.equal(f.exits, 0); assert.equal(f.active, false);
});
test('disposal while fullscreen or requesting never exits or reports after teardown', async () => {
  const f = fixture(); const pending = f.control.enter(); f.control.dispose(); f.finish(); await pending;
  assert.equal(f.active, true); assert.equal(f.exits, 0); assert.equal(f.reports.length, 0);
});
test('rejected fullscreen leaves timer independent and reports failure', async () => {
  const f = fixture({ reject: true }); await f.control.enter();
  assert.equal(f.reports.at(-1)[1], true); assert.equal(f.exits, 0);
});
test('existing fullscreen is not toggled by entering or disposal', () => {
  const f = fixture({ existing: true }); f.control.enter(); f.control.dispose();
  assert.equal(f.enters, 0); assert.equal(f.exits, 0); assert.equal(f.active, true);
});
test('timer, pause/reset and unload contain no automatic fullscreen exit', () => {
  assert(!source.includes('pause(); leaveFocusFullscreen'));
  assert(!source.includes('reset(); leaveFocusFullscreen'));
  assert(!source.includes("state.status !== 'running') leaveFocusFullscreen"));
  assert(!source.includes('control.dispose(); leaveFocusFullscreen'));
});
