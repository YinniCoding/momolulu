window.__ModuleLoader__.load({
  id: 'momolulu',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const ID = 'momolulu';
    const asset = (name) => require.asset(`plugins/momolulu/assets/${name}`);
    const scenes = [
      { name: 'scene-meadow.jpg', key: 'meadow' },
      { name: 'scene-hike.jpg', key: 'hike' },
      { name: 'scene-lake.jpg', key: 'lake' },
    ];
    const zh = {
      title: 'momolulu', subtitle: '慢慢来，我陪你一起。', meadow: '草甸', hike: '徒步', lake: '湖畔',
      radarWaiting: '等待处理', radarApproval: '请求权限', radarQuestion: '等待输入', radarSoftHint: '有其他会话可查看，无需确认或立即处理。', radar: '会话雷达', radarRunning: '运行中', radarUnread: '待查看', radarQuiet: '暂无变化', radarEmpty: '暂无会话变化', radarHint: '结束不代表成功；待查看状态仅在当前页面保留。', openFailed: '无法打开此会话，请从侧栏重试。', showAll: '展开全部', showLess: '收起列表', reminderPaused: '提醒随专注暂停',
      testReminder: '测试提醒（8 秒）', sound: '提示音', soundOn: '提示音 · 开', testBackground: '10 秒后响（可切屏）', soundOff: '提示音 · 关', focusCommand: '专注', focusCommandHint: '开始或暂停 momolulu 的专注计时', minimize: '缩成小头像', restore: '恢复照片', details: '详情',
      close: '收起', focus: '专注倒计时', start: '开始专注', pause: '暂停', resume: '继续', reset: '重置',
      ready: '准备好，开始一小段专注', running: '专注中', paused: '已暂停', done: '这一轮完成啦',
      minutes: '分钟', elapsed: '已专注', reminders: '休息提醒', on: '开启', off: '关闭', next: '距离下次休息',
      remindOff: '提醒已关闭，专注计时不受影响', remindToday: '今天已暂停提醒', remindReady: '开始专注后计时',
      break: '喝口水、活动肩颈，让眼睛看看远处吧。', finish: '专注完成！休息一下，再继续也不迟。',
      got: '收到', snooze: '10 分钟后提醒', today: '今天暂停', background: '背景', intensity: '背景浓度',
      drift: '缓慢巡游', activity: '会话动态', idle: '空闲', processing: '正在处理', newSession: '新会话',
      connecting: '正在连接会话…', empty: '暂无会话，开始创作吧。', more: '更多会话', view: '展开专注面板',
      weather: '天气', nanjing: '南京', local: '当前位置', locate: '使用当前位置', locating: '定位中…', locationError: '定位不可用，已切回南京', weatherLoading: '天气加载中', weatherError: '天气暂不可用', stale: '上次更新', refresh: '刷新', brightness: '背景亮度', backgroundAdjust: '背景调节', privacy: '点击定位后，坐标仅用于 Open-Meteo 天气查询，不保存到本地。', clear: '晴', cloudy: '多云', fog: '雾', rain: '雨', snow: '雪', storm: '雷雨', unknownWeather: '天气',
      restAfterFocus: '本轮结束后休息', enterFullscreen: '进入全屏', appearance: '外观设置', reminderSettings: '提醒设置', reminderEvery: '每 20 分钟提醒喝水 / 站立', noRunning: '当前没有运行中的任务', runningTasks: '运行中的任务', workMode: '工作模式', scenicMode: '陪伴模式', readingMode: '阅读保护',
      waterStand: '喝水 / 站立', remindOffShort: '提醒已关闭', exitFullscreen: '退出全屏', fullscreenHint: '开始专注时全屏 · Esc 可退出', fullscreenError: '无法自动全屏，可用窗口全屏按钮；专注计时仍在继续。',
    };
    const en = {
      title: 'momolulu', subtitle: 'One step at a time, together.', meadow: 'Meadow', hike: 'Hike', lake: 'Lake',
      radarWaiting: 'Needs input', radarApproval: 'Permission requested', radarQuestion: 'Waiting for input', radarSoftHint: 'Other sessions have updates. No acknowledgement or immediate action required.', radar: 'Session radar', radarRunning: 'Running', radarUnread: 'Unread', radarQuiet: 'No updates', radarEmpty: 'No session changes', radarHint: 'Ended does not mean successful. Unread status is local to this page.', openFailed: 'Unable to open this session. Try the sidebar.', showAll: 'Show all', showLess: 'Show less', reminderPaused: 'Reminders paused with focus',
      testReminder: 'Test reminder (8 sec)', sound: 'Chime', soundOn: 'Chime · On', testBackground: 'Ring in 10s (switch screen)', soundOff: 'Chime · Off', focusCommand: 'Focus', focusCommandHint: 'Start or pause the momolulu focus timer', minimize: 'Minimize to avatar', restore: 'Restore photo', details: 'Details',
      close: 'Close', focus: 'Focus countdown', start: 'Start focus', pause: 'Pause', resume: 'Resume', reset: 'Reset',
      ready: 'Ready for a little focus time', running: 'Focusing', paused: 'Paused', done: 'Session complete',
      minutes: 'min', elapsed: 'Focused', reminders: 'Break reminders', on: 'On', off: 'Off', next: 'Next break in',
      remindOff: 'Reminders off · focus timer continues', remindToday: 'Reminders paused today', remindReady: 'Starts with your focus timer',
      break: 'Have some water, stretch your shoulders and rest your eyes.', finish: 'Well done! Take a break before your next session.',
      got: 'Got it', snooze: 'Remind in 10 min', today: 'Pause today', background: 'Background', intensity: 'Background visibility',
      drift: 'Slow drift', activity: 'Session activity', idle: 'Idle', processing: 'Processing', newSession: 'New session',
      connecting: 'Connecting to sessions…', empty: 'No sessions yet. Start creating.', more: 'More sessions', view: 'Open focus panel',
      weather: 'Weather', nanjing: 'Nanjing', local: 'Current location', locate: 'Use my location', locating: 'Locating…', locationError: 'Location unavailable; using Nanjing', weatherLoading: 'Loading weather', weatherError: 'Weather unavailable', stale: 'Last update', refresh: 'Refresh', brightness: 'Background brightness', backgroundAdjust: 'Background settings', privacy: 'Location is sent only to Open-Meteo for weather after you click; coordinates are not stored locally.', clear: 'Clear', cloudy: 'Cloudy', fog: 'Fog', rain: 'Rain', snow: 'Snow', storm: 'Thunderstorm', unknownWeather: 'Weather',
      restAfterFocus: 'Rest after this session', enterFullscreen: 'Enter fullscreen', appearance: 'Appearance', reminderSettings: 'Reminder settings', reminderEvery: 'Water / stand reminder every 20 minutes', noRunning: 'No tasks running', runningTasks: 'Running tasks', workMode: 'Work mode', scenicMode: 'Scenic mode', readingMode: 'Reading protection',
      waterStand: 'Water / stand', remindOffShort: 'Reminders off', exitFullscreen: 'Exit fullscreen', fullscreenHint: 'Focus starts fullscreen · Esc to exit', fullscreenError: 'Automatic fullscreen unavailable. Use the window fullscreen button; your timer is still running.',
    };
    let layout, translate, workspace;
    const selectStatus = (snapshot) => snapshot;
    function radarGroups(catalog, statuses) {
      const running = [], unread = [], waiting = [];
      for (const row of Object.values(catalog.byId)) {
        // Child-agent addressing is separate; first version lists ordinary conversations only.
        if (row.origin === 'subagent') continue;
        const status = statuses.get(row.id);
        const isRunning = status?.running ?? row.running;
        if (status?.pendingInteraction) waiting.push({ ...row, attentionKind: status.pendingInteraction.kind === 'approval' ? 'radarApproval' : 'radarQuestion', requestKey: status.pendingInteraction.key });
        else if (isRunning) running.push(row);
        else if (status?.completionUnread) unread.push(row);
      }
      const recent = (a, b) => b.updatedAt - a.updatedAt;
      return { running: running.sort(recent), unread: unread.sort(recent), waiting: waiting.sort(recent) };
    }
    function attentionSnapshot(catalog, statuses) {
      const result = new Map();
      for (const row of Object.values(catalog.byId)) {
        if (row.origin === 'subagent' || (row.retainedBy?.mainView ?? 0) > 0) continue;
        const status = statuses.get(row.id);
        if (status?.pendingInteraction) result.set(row.id, `pending:${status.pendingInteraction.key}:${status.pendingInteraction.kind}`);
        else if (status?.completionUnread && !(status.running ?? row.running)) result.set(row.id, 'ended');
      }
      return result;
    }
    function newAttention(previous, current) {
      if (!previous) return false; // Establish baseline quietly after page load.
      return [...current].some(([id, token]) => previous.get(id) !== token);
    }
    const t = (key) => translate(key);
    const storage = {
      read() { try { return JSON.parse(localStorage.getItem('llm.companion.v2') || 'null'); } catch { return null; } },
      save(value) { try { localStorage.setItem('llm.companion.v2', JSON.stringify(value)); } catch { /* In-memory mode is still usable. */ } },
    };
    // Deadline-based calculations do not drift when a background tab throttles ticks.
    function remainingMs(clock, now) {
      return clock.status === 'running' ? Math.max(0, clock.deadline - now) : clock.remaining;
    }
    function formatTime(ms) {
      const seconds = Math.max(0, Math.ceil(ms / 1000));
      return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    }
    function initialState(saved) {
      const minutes = [15, 25, 45, 60].includes(saved?.minutes) ? saved.minutes : 25;
      const total = minutes * 60000;
      const valid = ['ready', 'running', 'paused', 'done'].includes(saved?.status) && Number.isFinite(saved?.remaining) && saved.remaining >= 0 && saved.remaining <= total && Number.isFinite(saved?.deadline);
      return {
        minutes, status: valid ? saved.status : 'ready', remaining: valid ? saved.remaining : total,
        deadline: valid ? saved.deadline : 0, now: Date.now(),
        reminderRemaining: Number.isFinite(saved?.reminderRemaining) ? Math.max(0, saved.reminderRemaining) : 20 * 60000,
        sound: saved?.sound === true,
        reminders: saved?.reminders !== false, nextReminder: Number.isFinite(saved?.nextReminder) ? saved.nextReminder : 0,
        pausedDate: typeof saved?.pausedDate === 'string' ? saved.pausedDate : '', notice: '', noticeAt: 0, previewAt: 0, previewUntil: 0,
        scene: [0, 1, 2].includes(saved?.scene) ? saved.scene : 0,
        minimized: saved?.minimized === true,
        readingProtection: saved?.readingProtection !== false, fullscreen: false,
        brightness: Math.min(180, Math.max(70, Number(saved?.brightness) || 122)),
        weather: null, weatherState: 'loading', locationKey: 'nanjing', locationError: false, locating: false,
        bgOn: saved?.bgOn !== false, intensity: Math.min(75, Math.max(15, Number(saved?.intensity) || 45)), drift: saved?.drift !== false,
      };
    }
    let state;
    const listeners = new Set();
    const getSnapshot = () => state;
    const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
    const CHIME_KEYS = ['status', 'sound', 'reminders', 'nextReminder', 'deadline', 'pausedDate'];
    function update(patch, persist = true) {
      state = { ...state, ...patch };
      if (persist) storage.save(state);
      if (CHIME_KEYS.some((key) => key in patch)) syncScheduledChimes();
      for (const fn of listeners) fn();
    }
    // Optional chime. The AudioContext is created only after a user gesture, so
    // browsers that block autoplay simply stay silent instead of erroring.
    let audioContext;
    function ensureAudio() {
      try {
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) return undefined;
        if (audioContext === undefined) {
          audioContext = new Ctor();
          audioContext.addEventListener?.('statechange', () => {
            if (audioContext?.state === 'running') syncScheduledChimes();
          });
        }
        if (audioContext.state === 'suspended') void audioContext.resume().catch(() => {});
      } catch { audioContext = undefined; }
      return audioContext;
    }
    function playChime() {
      const audio = ensureAudio();
      if (!audio) return;
      const emit = () => {
        const start = audio.currentTime;
        [660, 880].forEach((frequency, index) => {
          const oscillator = audio.createOscillator();
          const gain = audio.createGain();
          const at = start + index * 0.18;
          oscillator.type = 'sine';
          oscillator.frequency.value = frequency;
          gain.gain.setValueAtTime(0, at);
          gain.gain.linearRampToValueAtTime(0.12, at + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.35);
          oscillator.connect(gain).connect(audio.destination);
          oscillator.start(at);
          oscillator.stop(at + 0.4);
        });
      };
      // The first chime often runs while the context is still suspended; wait for it.
      if (audio.state === 'running') emit();
      else Promise.resolve(audio.resume()).then(emit).catch(() => {});
    }
    // A near-silent oscillator holds the audio device open; without it macOS/Chromium can
    // suspend the context while the window is hidden, and scheduled chimes never fire.
    let keepAliveOscillator;
    function startAudioKeepAlive() {
      const audio = ensureAudio();
      if (!audio || keepAliveOscillator) return;
      try {
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        oscillator.frequency.value = 30;
        gain.gain.value = 0.00005;
        oscillator.connect(gain).connect(audio.destination);
        oscillator.start();
        keepAliveOscillator = oscillator;
      } catch { keepAliveOscillator = undefined; }
    }
    function stopAudioKeepAlive() {
      try { keepAliveOscillator?.stop(); } catch { /* already stopped */ }
      keepAliveOscillator = undefined;
    }
    // A scheduled chime rides the audio clock, so a hidden or throttled window still rings on time.
    let scheduledChimes = [];
    function cancelScheduledChimes() {
      for (const node of scheduledChimes) { try { node.stop(); } catch { /* already stopped */ } }
      scheduledChimes = [];
    }
    function scheduleChimeIn(delayMs) {
      const audio = ensureAudio();
      if (!audio) return;
      const arm = () => {
        const at = audio.currentTime + Math.max(0, delayMs) / 1000;
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = 760;
        gain.gain.setValueAtTime(0.0001, at);
        gain.gain.linearRampToValueAtTime(0.12, at + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.5);
        oscillator.connect(gain).connect(audio.destination);
        oscillator.start(at);
        oscillator.stop(at + 0.55);
        scheduledChimes.push(oscillator);
      };
      if (audio.state === 'running') arm();
      else Promise.resolve(audio.resume()).then(arm).catch(() => {});
    }
    function syncScheduledChimes() {
      cancelScheduledChimes();
      if (!state.sound) { stopAudioKeepAlive(); return; }
      startAudioKeepAlive();
      if (state.status !== 'running') return;
      const now = Date.now();
      const today = new Date(now).toDateString();
      if (state.reminders && state.pausedDate !== today && state.nextReminder > now) scheduleChimeIn(state.nextReminder - now);
      if (state.deadline > now) scheduleChimeIn(state.deadline - now);
    }
    function tick(now = Date.now()) {
      const patch = { now };
      let persist = false;
      if (state.status === 'running' && remainingMs(state, now) === 0) {
        Object.assign(patch, { status: 'done', remaining: 0, notice: 'finish', noticeAt: now });
        persist = true;
      } else if (state.status === 'running' && state.reminders && state.pausedDate !== new Date(now).toDateString() && state.nextReminder && now >= state.nextReminder) {
        Object.assign(patch, { notice: 'break', noticeAt: now, nextReminder: now + 20 * 60000 });
        persist = true;
      }
      update(patch, persist);
    }
    function start() {
      const now = Date.now();
      const remaining = state.status === 'paused' ? state.remaining : state.minutes * 60000;
      update({ now, status: 'running', remaining, deadline: now + remaining, nextReminder: now + (state.status === 'paused' ? (state.reminderRemaining ?? 20 * 60000) : 20 * 60000), notice: '' });
    }
    function pause() { const now = Date.now(); update({ now, remaining: remainingMs(state, now), reminderRemaining: Math.max(0, state.nextReminder - now), status: 'paused' }); }
    function reset(minutes = state.minutes) { update({ minutes, status: 'ready', remaining: minutes * 60000, deadline: 0, nextReminder: 0, notice: '', previewAt: 0, previewUntil: 0 }); }
    function setReminders(enabled) {
      const now = Date.now();
      update({ reminders: enabled, pausedDate: '', nextReminder: now + 20 * 60000, reminderRemaining: 20 * 60000, notice: '' });
    }
    const selectCatalog = (snapshot) => snapshot;
    // Fullscreen is a window preference, not a timer state. Only explicit user exit ends it.
    function createFullscreenControl(port) {
      let pending = null, wanted = false, disposed = false;
      function report(error = false) { if (!disposed) port.report(port.active(), error); }
      function exit() {
        wanted = false;
        if (disposed || !port.active()) return;
        try { Promise.resolve(port.exit()).then(() => report(), () => report(true)); }
        catch { report(true); }
      }
      function enter() {
        if (disposed) return;
        wanted = true;
        if (port.active()) { report(); return; }
        if (pending) return pending;
        try {
          // Call synchronously from the user's click to retain browser activation.
          const request = port.enter();
          pending = Promise.resolve(request).then(() => {
            pending = null;
            if (disposed) return;
            if (!wanted) exit();
            else report();
          }, () => { pending = null; report(true); });
          return pending;
        } catch { report(true); }
      }
      return { enter, exit, changed: () => report(), dispose() { disposed = true; } };
    }
    let fullscreenControl;
    function leaveFocusFullscreen() { fullscreenControl?.exit(); }
    function enterFocusFullscreen() { return fullscreenControl?.enter(); }
    function startFocused() { start(); enterFocusFullscreen(); }
    function reminderLabel(model) {
      if (!model.reminders) return t('remindOffShort');
      if (model.pausedDate === new Date(model.now).toDateString()) return t('remindToday');
      if (model.status === 'paused') return t('reminderPaused');
      if (model.status !== 'running') return t('remindReady');
      if (model.nextReminder >= model.deadline) return t('restAfterFocus');
      const time = new Date(model.nextReminder).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
      return `${t('waterStand')} · ${time}`;
    }
    function weatherKind(code) {
      if (code === 0) return 'clear';
      if ([1, 2, 3].includes(code)) return 'cloudy';
      if ([45, 48].includes(code)) return 'fog';
      if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
      if ([95, 96, 99].includes(code)) return 'storm';
      if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'rain';
      return 'unknownWeather';
    }
    let weatherController, weatherActive = false, locationGeneration = 0;
    let weatherCoordinates = { latitude: 32.06, longitude: 118.80 };
    async function loadWeather() {
      if (!weatherActive) return;
      weatherController?.abort();
      const controller = new AbortController();
      weatherController = controller;
      update({ weatherState: 'loading' }, false);
      const timeout = setTimeout(() => controller.abort(), 12000);
      try {
        const url = new URL('https://api.open-meteo.com/v1/forecast');
        url.search = new URLSearchParams({ latitude: String(weatherCoordinates.latitude), longitude: String(weatherCoordinates.longitude), current: 'temperature_2m,weather_code', timezone: 'auto' }).toString();
        const response = await fetch(url, { signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer' });
        if (!response.ok) throw new Error(`Weather HTTP ${response.status}`);
        const data = await response.json();
        if (!Number.isFinite(data.current?.temperature_2m) || !Number.isFinite(data.current?.weather_code)) throw new Error('Invalid weather response');
        if (weatherActive && weatherController === controller) update({ weather: { temperature: Math.round(data.current.temperature_2m), code: data.current.weather_code, time: data.current.time }, weatherState: 'ready' }, false);
      } catch {
        if (weatherActive && weatherController === controller) update({ weatherState: 'error' }, false);
      } finally { clearTimeout(timeout); }
    }
    function useNanjing(locationError = false) {
      locationGeneration++;
      weatherCoordinates = { latitude: 32.06, longitude: 118.80 };
      update({ locationKey: 'nanjing', locating: false, locationError, weather: null }, false);
      void loadWeather();
    }
    function locateWeather() {
      if (!navigator.geolocation) { useNanjing(true); return; }
      const generation = ++locationGeneration;
      update({ locating: true, locationError: false }, false);
      navigator.geolocation.getCurrentPosition((position) => {
        if (!weatherActive || generation !== locationGeneration) return;
        weatherCoordinates = { latitude: Math.round(position.coords.latitude * 100) / 100, longitude: Math.round(position.coords.longitude * 100) / 100 };
        update({ locationKey: 'local', locating: false, locationError: false, weather: null }, false);
        void loadWeather();
      }, () => { if (weatherActive && generation === locationGeneration) useNanjing(true); }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 15 * 60000 });
    }
    function weatherText(model) {
      if (!model.weather) return t(model.weatherState === 'error' ? 'weatherError' : 'weatherLoading');
      return `${t(model.locationKey)} · ${model.weather.temperature}°C · ${t(weatherKind(model.weather.code))}${model.weatherState === 'error' ? ' · ' + t('stale') + ' ' + String(model.weather.time || '').slice(11, 16) : ''}`;
    }
    const css = `
      .llm-root{font:13px/1.5 system-ui,-apple-system,sans-serif;color:var(--dsw-alias-label-primary);pointer-events:none}
      .llm-root *{box-sizing:border-box}.llm-root button,.llm-root input{font:inherit}
      .llm-floating{position:fixed;right:24px;bottom:24px;z-index:20;max-width:calc(100vw - 32px)}
      .llm-bg{position:fixed;inset:0;pointer-events:none;z-index:-1;background-size:cover;background-position:center;filter:brightness(1.22) saturate(1.12);mask-image:linear-gradient(90deg,transparent,rgba(0,0,0,.25) 30%,#000 75%)}
      .llm-panel{position:relative;isolation:isolate;min-height:100%;padding:calc(var(--dsh-frame-top-clearance,48px) + 24px) 28px 28px;display:flex;align-items:center;justify-content:center}
      .llm-panel .llm-bg{position:absolute;mask-image:none}
      .llm-bg-protected{mask-image:linear-gradient(90deg,transparent 0%,rgba(0,0,0,.04) 30%,rgba(0,0,0,.08) 65%,rgba(0,0,0,.3) 82%,#000 100%)}
      .llm-disclosure{margin-top:12px;border-top:1px solid var(--dsw-alias-border-l1);padding-top:10px}.llm-disclosure summary{cursor:pointer;font-weight:650}.llm-summary{margin-top:10px;color:var(--dsw-alias-label-secondary);font-size:12px}.llm-status-line{min-height:22px}
      .llm-card{width:370px;max-width:100%;max-height:calc(100dvh - 96px);overflow:auto;pointer-events:auto;border:1px solid var(--dsw-alias-border-l2);border-radius:24px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 95%,transparent);box-shadow:0 16px 48px color-mix(in srgb,var(--dsw-alias-label-primary) 15%,transparent);padding:18px;backdrop-filter:blur(18px)}
      .llm-panel-card{width:580px}.llm-head,.llm-row,.llm-actions,.llm-controls,.llm-settings{display:flex;align-items:center;gap:10px}
      .llm-head{margin-bottom:14px}.llm-title{font-size:17px;font-weight:750}.llm-sub,.llm-meta{color:var(--dsw-alias-label-secondary);font-size:12px}.llm-actions{margin-left:auto}
      .llm-avatar{width:48px;height:48px;object-fit:cover;object-position:72% 80%;border-radius:14px}
      .llm-btn{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;padding:7px 11px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);cursor:pointer}
      .llm-btn:hover{border-color:var(--dsw-alias-brand-primary)}.llm-btn:focus-visible,.llm-photo:focus-visible{outline:3px solid var(--dsw-alias-brand-primary);outline-offset:3px}
      .llm-primary{flex:1;font-weight:700;background:color-mix(in srgb,var(--dsw-alias-brand-primary) 17%,var(--dsw-alias-bg-layer-2));border-color:var(--dsw-alias-brand-primary)}
      .llm-photo{position:relative;display:block;width:196px;height:238px;overflow:hidden;border:2px solid var(--dsw-alias-border-l2);border-radius:26px;padding:0;cursor:pointer;pointer-events:auto;background:var(--dsw-alias-bg-layer-1);box-shadow:0 12px 40px color-mix(in srgb,var(--dsw-alias-label-primary) 20%,transparent)}
      .llm-photo img{width:100%;height:100%;object-fit:cover;object-position:73% 80%;filter:brightness(1.12);transition:transform .6s}
      .llm-photo:hover img{transform:scale(1.06)}.llm-stack{position:relative;display:flex;flex-direction:column;align-items:flex-end;gap:7px}.llm-drift{animation:llm-drift 58s linear infinite alternate;will-change:transform}.llm-drift:hover,.llm-drift:has(:focus-visible),.llm-drift:has(.llm-card){animation-play-state:paused}
      .llm-photo-caption{position:absolute;inset:12px 10px auto;padding:0;border:0;background:transparent;color:#fff;text-shadow:0 1px 4px #000,0 0 12px #000;text-align:left;pointer-events:none}.llm-photo-caption .llm-sub{color:inherit}.llm-status-line{display:flex;justify-content:center;align-items:center;gap:12px;flex-wrap:wrap}.llm-next-inline{font-size:11px;font-variant-numeric:tabular-nums}.llm-photo-caption .llm-status-line{display:grid;grid-template-columns:1fr;gap:2px;margin-top:4px;text-align:left}.llm-photo-caption .llm-sub,.llm-photo-caption .llm-next-inline,.llm-weather-mini{max-width:100%;text-align:left;font:500 11px/1.45 system-ui,-apple-system,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:0}.llm-weather-mini{margin-top:4px}.llm-photo-name{font-size:12px}.llm-sliders{margin-top:12px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l1)}.llm-sliders label{display:grid;grid-template-columns:96px 1fr 42px;align-items:center;gap:8px;margin-top:10px;font-size:12px;color:var(--dsw-alias-label-secondary)}.llm-sliders input{width:100%;accent-color:var(--dsw-alias-brand-primary)}.llm-sliders output{text-align:right;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary)}.llm-weather-panel{margin:12px 0;padding:10px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px}.llm-weather-panel a{color:var(--dsw-alias-label-secondary)}
      .llm-photo-name{display:flex;justify-content:space-between;align-items:center;font-weight:750}.llm-mini-clock{font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;line-height:1.2;margin-top:4px}
      .llm-focus{padding:18px 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:20px;background:var(--dsw-alias-bg-layer-2);text-align:center}
      .llm-label{color:var(--dsw-alias-label-secondary);font-size:12px}.llm-clock{font-size:64px;font-weight:800;letter-spacing:-3px;line-height:1.18;font-variant-numeric:tabular-nums;margin:7px 0;color:var(--dsw-alias-brand-primary)}
      .llm-progress{display:block;width:100%;height:7px;margin:14px 0;accent-color:var(--dsw-alias-brand-primary)}
      .llm-presets{display:flex;justify-content:center;gap:6px;margin:12px 0}.llm-presets button[aria-pressed=true]{border-color:var(--dsw-alias-brand-primary);background:color-mix(in srgb,var(--dsw-alias-brand-primary) 15%,var(--dsw-alias-bg-layer-1))}
      .llm-reminders{margin-top:12px;padding:12px;border:1px solid var(--dsw-alias-border-l1);border-radius:16px}.llm-reminders-head{display:flex;align-items:center;justify-content:space-between}.llm-break-clock{font-size:28px;font-weight:750;font-variant-numeric:tabular-nums;line-height:1.3;margin-top:6px}
      .llm-section{margin:18px 0 8px;font-weight:700}.llm-row{padding:8px 0;border-top:1px solid var(--dsw-alias-border-l1)}.llm-row-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:280px}.llm-dot{height:8px;width:8px;flex:none;border-radius:50%;background:var(--dsw-alias-state-idle-primary)}.llm-live{background:var(--dsw-alias-state-success-primary)}
      .llm-notice{margin-top:12px;padding:12px;border-radius:14px;background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 18%,var(--dsw-alias-bg-layer-2))}.llm-controls{margin-top:10px;flex-wrap:wrap}
      .llm-settings{flex-wrap:wrap;margin-top:12px}.llm-settings label{display:flex;align-items:center;gap:8px}.llm-settings input[type=range]{width:110px;accent-color:var(--dsw-alias-brand-primary)}
      .llm-float-widget{width:184px;pointer-events:auto}.llm-photo-stage{position:relative}.llm-photo-clean{width:184px;height:166px;border-radius:22px;border-width:1px}.llm-photo-clean img{object-position:73% 90%}.llm-photo-brand{position:absolute;top:10px;left:12px;font-size:12px;font-weight:700;color:#fff;text-shadow:0 1px 5px #000}.llm-minimize{position:absolute;right:7px;top:7px;width:30px;height:30px;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:50%;background:color-mix(in srgb,var(--dsw-alias-bg-overlay) 70%,transparent);color:var(--dsw-alias-label-primary);cursor:pointer;font-size:18px!important}.llm-float-info{padding:8px 2px 0;text-align:left;background:transparent;text-shadow:0 1px 3px var(--dsw-alias-bg-base),0 0 8px var(--dsw-alias-bg-base)}.llm-float-clock-row{display:flex;align-items:center;justify-content:space-between;gap:8px}.llm-float-clock{font-size:28px;font-weight:750;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.7px}.llm-quick{width:32px;height:32px;border-radius:50%;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);cursor:pointer}.llm-float-status,.llm-float-reminder,.llm-float-weather{font-size:11px;font-weight:500;line-height:1.5;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.llm-float-weather{color:var(--dsw-alias-label-secondary)}.llm-float-notice{display:block;margin-top:5px;padding:5px 0;background:transparent;border:0;color:var(--dsw-alias-state-warn-primary);font-size:11px;cursor:pointer;text-align:left}.llm-bubble{position:relative;width:68px;height:68px;border-radius:50%;border:0;padding:4px;background:conic-gradient(var(--dsw-alias-brand-primary) var(--llm-progress),var(--dsw-alias-border-l2) 0);cursor:pointer;pointer-events:auto}.llm-bubble img{width:60px;height:60px;object-fit:cover;object-position:73% 85%;border-radius:50%;display:block}.llm-bubble-time{position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);border-radius:10px;padding:1px 6px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-size:11px;font-variant-numeric:tabular-nums;border:1px solid var(--dsw-alias-border-l1)}.llm-bubble-notice{position:absolute;right:0;top:0;border-radius:50%;padding:0 6px;background:var(--dsw-alias-state-warn-primary);color:var(--dsw-alias-bg-base)}.llm-root button:focus-visible{outline:3px solid var(--dsw-alias-brand-primary);outline-offset:3px}.llm-bubble:hover,.llm-bubble:focus-visible{animation-play-state:paused}
      .llm-radar-trigger{pointer-events:auto;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:5px 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);cursor:pointer;font-size:11px!important}.llm-radar-badge{position:absolute;right:-5px;top:-9px;z-index:2;min-width:27px;max-width:48px;min-height:27px;border-radius:999px;font-weight:700!important}.llm-radar-panel{position:absolute;right:0;z-index:30;max-height:min(64vh,520px);width:min(320px,calc(100vw - 32px));max-height:min(440px,calc(100dvh - 130px));overflow:auto;padding:14px;border:1px solid var(--dsw-alias-border-l2);border-radius:18px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);pointer-events:auto;box-shadow:0 12px 40px color-mix(in srgb,var(--dsw-alias-label-primary) 15%,transparent)}.llm-radar-group{margin:10px 0}.llm-radar-label{font-size:12px;font-weight:650;margin-bottom:5px}.llm-radar-row{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;padding:9px 7px;text-align:left;background:transparent;border:0;border-bottom:1px solid var(--dsw-alias-border-l1);border-radius:6px;color:var(--dsw-alias-label-primary);cursor:pointer}.llm-radar-row:hover{background:var(--dsw-alias-bg-layer-2)}.llm-radar-row-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .llm-reminder-button{display:block;width:100%;padding:0;background:transparent;border:0;color:inherit;cursor:pointer;text-align:left}.llm-alert-highlight{color:var(--dsw-alias-label-primary)!important;background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 24%,var(--dsw-alias-bg-layer-1));border-left:3px solid var(--dsw-alias-state-warn-primary);border-radius:6px;padding:6px 8px!important;font-weight:700!important;white-space:normal!important;text-shadow:none}.llm-alert-actions{display:flex;gap:4px;margin-top:5px;flex-wrap:wrap}.llm-alert-actions .llm-btn{font-size:10px;padding:4px 6px}.llm-alert-shake{animation:llm-nudge .75s ease-in-out 2;transform-origin:center bottom}@keyframes llm-nudge{0%,100%{transform:translateX(0) rotate(0)}20%{transform:translateX(-4px) rotate(-2deg)}40%{transform:translateX(4px) rotate(2deg)}60%{transform:translateX(-3px) rotate(-1deg)}80%{transform:translateX(2px) rotate(1deg)}}@media(prefers-reduced-motion:reduce){.llm-alert-shake{animation:none}}
      .llm-radar-panel[data-placement='above']{bottom:calc(100% + 8px)}.llm-radar-panel[data-placement='below']{top:calc(100% + 8px)}.llm-radar-attention{border-color:var(--dsw-alias-state-warn-primary)!important;background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 22%,var(--dsw-alias-bg-overlay))!important;box-shadow:0 0 0 3px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 18%,transparent)}.llm-radar-count{margin-left:6px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary)}.llm-radar-kind{display:block;color:var(--dsw-alias-state-warn-primary);font-size:11px;font-weight:600;margin-top:2px}
      @keyframes llm-drift{from{transform:translateY(0)}to{transform:translateY(var(--llm-drift-px, 0px))}}
      @media(prefers-reduced-motion:reduce){.llm-drift{animation:none}.llm-photo img{transition:none}}
      @media(max-width:600px){.llm-floating{right:12px;bottom:12px}.llm-photo{width:168px;height:212px}.llm-float-widget{width:168px}.llm-photo-clean{width:168px;height:150px}.llm-card{width:min(370px,calc(100vw - 24px));max-height:calc(100dvh - 48px)}.llm-panel{padding:64px 12px 12px}.llm-clock{font-size:54px}}
    `;
    function Companion({ useSessions, useSessionStatus, panelMode = false }) {
      const catalog = useSessions(selectCatalog);
      const statuses = useSessionStatus(selectStatus);
      const groups = radarGroups(catalog, statuses);
      const [radarOpen, setRadarOpen] = React.useState(false);
      const [showAll, setShowAll] = React.useState(false);
      const [navigationError, setNavigationError] = React.useState('');
      const [radarPlacement, setRadarPlacement] = React.useState(null);
      const radarTrigger = React.useRef(null);
      const stackRef = React.useRef(null);
      const [driftPx, setDriftPx] = React.useState(0);
      const radarPanel = React.useRef(null);
      const radarId = React.useId();
      React.useEffect(() => {
        if (radarOpen) radarPanel.current?.querySelector('button')?.focus();
      }, [radarOpen]);
      const model = React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
      const previousAttention = React.useRef(null);
      const lastNudge = React.useRef(0);
      const [radarAttentionAt, setRadarAttentionAt] = React.useState(0);
      React.useEffect(() => {
        if (catalog.phase !== 'ready') { previousAttention.current = null; return; }
        const current = attentionSnapshot(catalog, statuses);
        const now = Date.now();
        if (!panelMode && newAttention(previousAttention.current, current) && now - lastNudge.current >= 8000) {
          lastNudge.current = now;
          setRadarAttentionAt(now);
        }
        previousAttention.current = current;
      }, [catalog, statuses, panelMode]);
      const radarHighlight = radarAttentionAt > 0 && model.now - radarAttentionAt < 12000;
      const radarShake = radarHighlight && model.now - radarAttentionAt < 1800;
      const [open, setOpen] = React.useState(false);
      const expanded = panelMode || open;
      const previewActive = model.previewUntil > model.now;
      const alertActive = !!model.notice || previewActive;
      const attentionAt = model.notice ? model.noticeAt : model.previewAt || 0;
      const alertShake = alertActive && attentionAt > 0 && model.now - attentionAt < 1800;
      const reminderText = model.notice ? t(model.notice) : previewActive ? t('break') : reminderLabel(model);
      const remaining = remainingMs(model, model.now);
      const total = model.minutes * 60000;
      const currentScene = scenes[model.scene];
      const sessions = Object.values(catalog.byId).sort((a, b) => Number(b.running) - Number(a.running) || b.updatedAt - a.updatedAt);
      const active = sessions.filter((row) => row.running).length;
      const todayPaused = model.pausedDate === new Date(model.now).toDateString();
      const statusKey = model.status === 'running' ? 'running' : model.status === 'paused' ? 'paused' : model.status === 'done' ? 'done' : 'ready';
      const button = (label, onClick, extra = {}) => h('button', { type: 'button', className: 'llm-btn', onClick, ...extra }, label);
      const radarCount = groups.running.length + groups.unread.length + groups.waiting.length;
      const radarSummary = [
        groups.waiting.length && `${groups.waiting.length} ${t('radarWaiting')}`,
        groups.running.length && `${groups.running.length} ${t('radarRunning')}`,
        groups.unread.length && `${groups.unread.length} ${t('radarUnread')}`,
      ].filter(Boolean).join(' · ') || t('radarQuiet');
      const closeRadar = () => { setRadarOpen(false); radarTrigger.current?.focus(); };
      const navigate = (row) => {
        try { workspace.openSession(row.id); setRadarOpen(false); setOpen(false); setNavigationError(''); }
        catch { setNavigationError(t('openFailed')); }
      };
      const renderGroup = (label, rows) => rows.length === 0 ? null : h('div', { className: 'llm-radar-group' },
        h('div', { className: 'llm-radar-label' }, label, h('span', { className: 'llm-radar-count' }, rows.length)),
        rows.slice(0, showAll ? rows.length : 3).map((row) => button(
          h(React.Fragment, null, h('span', { className: 'llm-radar-row-title' }, row.displayTitle || row.id, row.attentionKind && h('small', { className: 'llm-radar-kind' }, t(row.attentionKind))), h('span', { 'aria-hidden': true }, '↗')),
          () => navigate(row), { key: row.id, className: 'llm-radar-row', title: `${row.displayTitle || row.id}${row.cwd ? '\n' + row.cwd : ''}` })));
      const drifting = model.drift && !panelMode;
      React.useEffect(() => {
        if (!drifting) { setDriftPx(0); return undefined; }
        const measure = () => {
          const height = stackRef.current?.getBoundingClientRect().height ?? 0;
          const travel = Math.round(height + 136 - window.innerHeight);
          setDriftPx(Math.min(0, travel));
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
      }, [drifting, expanded, model.minimized]);
      return h('div', { className: `llm-root ${panelMode ? 'llm-panel' : 'llm-floating'}`, onPointerDownCapture: () => { if (model.sound) { ensureAudio(); syncScheduledChimes(); } } },
        h('style', null, css),
        model.bgOn && h('div', { className: 'llm-bg' + (model.readingProtection && !panelMode ? ' llm-bg-protected' : ''), style: { backgroundImage: `url("${asset(currentScene.name)}")`, opacity: model.intensity / 100, filter: `brightness(${model.brightness / 100}) saturate(1.12)` } }),

        h('div', { ref: stackRef, className: 'llm-stack' + (drifting ? ' llm-drift' : ''), style: drifting ? { '--llm-drift-px': `${driftPx}px` } : undefined },
        !panelMode && h('button', { type: 'button', ref: radarTrigger, className: 'llm-radar-trigger' + (radarHighlight ? ' llm-radar-attention' : '') + (radarShake ? ' llm-alert-shake' : '') + (model.minimized && !expanded ? ' llm-radar-badge' : ''), onClick: () => {
            const next = !radarOpen;
            if (next && radarTrigger.current) {
              const rect = radarTrigger.current.getBoundingClientRect();
              const spaceAbove = rect.top - 24;
              const spaceBelow = window.innerHeight - rect.bottom - 24;
              if (spaceAbove >= 240 || spaceAbove >= spaceBelow) setRadarPlacement({ side: 'above', maxHeight: Math.max(180, Math.min(440, spaceAbove)) });
              else setRadarPlacement({ side: 'below', maxHeight: Math.max(180, Math.min(440, spaceBelow)) });
            }
            setRadarOpen(next);
            setRadarAttentionAt(0);
          }, 'aria-expanded': radarOpen, 'aria-controls': radarId, 'aria-label': `${t('radar')} · ${radarSummary}`, title: radarSummary + (radarHighlight ? ' · ' + t('radarSoftHint') : '') }, model.minimized && !expanded ? (radarCount > 99 ? '99+' : radarCount || '☷') : `☷ ${radarSummary}`),
        !panelMode && radarOpen && h('section', { ref: radarPanel, id: radarId, className: 'llm-radar-panel', 'data-placement': radarPlacement?.side || 'above', style: radarPlacement ? { maxHeight: radarPlacement.maxHeight } : undefined, 'aria-label': t('radar'), onKeyDown: (event) => { if (event.key === 'Escape') { event.stopPropagation(); closeRadar(); } }, onBlur: (event) => { if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== radarTrigger.current) setRadarOpen(false); } },
          h('header', { className: 'llm-head' }, h('strong', null, t('radar')), button(t('close'), closeRadar, { className: 'llm-btn llm-actions' })),
          groups.waiting.length > 0 && renderGroup(t('radarWaiting'), groups.waiting),
          groups.running.length > 0 && renderGroup(t('radarRunning'), groups.running),
          groups.unread.length > 0 && renderGroup(t('radarUnread'), groups.unread),
          !radarCount && h('div', { className: 'llm-sub' }, t(catalog.phase === 'ready' ? 'radarEmpty' : 'connecting')),
          (groups.running.length > 3 || groups.unread.length > 3 || groups.waiting.length > 3) && button(t(showAll ? 'showLess' : 'showAll'), () => setShowAll(!showAll)),
          navigationError && h('div', { role: 'status', className: 'llm-sub' }, navigationError), h('div', { className: 'llm-summary' }, t('radarHint'))),

        !expanded ? model.minimized ? h('button', {
          type: 'button', className: 'llm-bubble' + (alertShake || radarShake ? ' llm-alert-shake' : ''), key: `bubble-${Math.max(attentionAt, radarAttentionAt)}`, onClick: () => update({ minimized: false }),
          'aria-label': `${t('restore')} · ${formatTime(remaining)} · ${model.notice ? t(model.notice) : t(statusKey)}`,
          title: t('restore'), style: { '--llm-progress': `${Math.max(0, Math.min(100, (total - remaining) / total * 100))}%` } }, 
          h('img', { src: asset(currentScene.name), alt: '' }),
          h('span', { className: 'llm-bubble-time' }, formatTime(remaining)),
          alertActive && h('span', { className: 'llm-bubble-notice', 'aria-hidden': true }, '!'))
        : h('div', { className: 'llm-float-widget' + (alertShake || radarShake ? ' llm-alert-shake' : ''), key: `widget-${Math.max(attentionAt, radarAttentionAt)}` },
          h('div', { className: 'llm-photo-stage' },
            h('button', { type: 'button', className: 'llm-photo llm-photo-clean', onClick: () => setOpen(true), 'aria-label': t('view'), 'aria-expanded': false },
              h('img', { src: asset(currentScene.name), alt: t('title') }),
              h('span', { className: 'llm-photo-brand' }, t('title'))),
            button('−', () => update({ minimized: true }), { className: 'llm-minimize', 'aria-label': t('minimize'), title: t('minimize') })),
          h('div', { className: 'llm-float-info' },
            h('div', { className: 'llm-float-clock-row' }, h('span', { className: 'llm-float-clock', role: 'timer' }, formatTime(remaining)), button(model.status === 'running' ? 'Ⅱ' : '▶', model.status === 'running' ? pause : startFocused, { className: 'llm-quick', 'aria-label': t(model.status === 'running' ? 'pause' : model.status === 'paused' ? 'resume' : 'start'), title: t(model.status === 'running' ? 'pause' : model.status === 'paused' ? 'resume' : 'start') })),
            h('div', { className: 'llm-float-status' }, t(statusKey)),
            button(reminderText, () => alertActive ? update({ notice: '', previewUntil: 0 }) : setOpen(true), { className: 'llm-float-reminder llm-reminder-button' + (alertActive ? ' llm-alert-highlight' : ''), title: alertActive ? `${reminderText} · ${t('got')}` : reminderText, 'aria-live': 'polite' }),
            h('div', { className: 'llm-float-weather', title: weatherText(model) }, weatherText(model)),
            model.notice && h('div', { className: 'llm-alert-actions' }, button(t('got'), () => update({ notice: '' })), model.status === 'running' && button(t('snooze'), () => update({ notice: '', nextReminder: Date.now() + 10 * 60000 }))),
            model.fullscreenError && h('div', { className: 'llm-sub', role: 'status' }, t('fullscreenError'))))
        : h('section', { className: `llm-card${panelMode ? ' llm-panel-card' : ''}`, 'aria-label': t('title') },
          h('header', { className: 'llm-head' }, h('img', { className: 'llm-avatar', src: asset(currentScene.name), alt: '' }), h('div', null, h('div', { className: 'llm-title' }, t('title')), h('div', { className: 'llm-sub' }, t('subtitle'))), h('div', { className: 'llm-actions' }, button(t('close'), () => panelMode ? layout.selectPanel(null) : setOpen(false)))),
          h('div', { className: 'llm-focus' }, h('div', { className: 'llm-label' }, t('focus')), h('div', { className: 'llm-clock', role: 'timer', 'aria-label': t('focus') }, formatTime(remaining)), h('div', { className: 'llm-status-line' }, h('span', { className: 'llm-sub' }, t(statusKey)), h('span', { className: 'llm-next-inline' + (alertActive ? ' llm-alert-highlight' : ''), 'aria-live': 'polite' }, reminderText)),
            h('progress', { className: 'llm-progress', value: total - remaining, max: total, 'aria-label': t('focus') }),
            !['running', 'paused'].includes(model.status) && h('div', { className: 'llm-presets' }, [15, 25, 45, 60].map((minutes) => button(`${minutes} ${t('minutes')}`, () => reset(minutes), { key: minutes, disabled: model.status === 'running' || model.status === 'paused', 'aria-pressed': model.minutes === minutes }))),
            h('div', { className: 'llm-controls' }, button(t(model.status === 'running' ? 'pause' : model.status === 'paused' ? 'resume' : 'start'), model.status === 'running' ? pause : startFocused, { className: 'llm-btn llm-primary' }), button(t('reset'), () => reset())),
            h('div', { className: 'llm-sub', style: { marginTop: 8 } }, t(model.fullscreenError ? 'fullscreenError' : 'fullscreenHint')),
            (model.status === 'running' || model.fullscreen) && button(t(model.fullscreen ? 'exitFullscreen' : 'enterFullscreen'), () => model.fullscreen ? leaveFocusFullscreen() : enterFocusFullscreen()),
            h('div', { className: 'llm-sub', style: { marginTop: 10 } }, `${t('elapsed')} · ${formatTime(total - remaining)}`)),
          h('details', { className: 'llm-disclosure' }, h('summary', null, `${t('reminderSettings')} · ${t(model.reminders && !todayPaused ? 'on' : 'off')}`),
            h('div', { className: 'llm-settings' }, button(t(model.reminders && !todayPaused ? 'on' : 'off'), () => setReminders(!model.reminders || todayPaused), { role: 'switch', 'aria-checked': model.reminders && !todayPaused })),
            h('div', { className: 'llm-settings' }, button(t(model.sound ? 'soundOn' : 'soundOff'), () => { const next = !model.sound; update({ sound: next }); if (next) playChime(); }, { role: 'switch', 'aria-checked': model.sound })),
            h('div', { className: 'llm-summary' }, t('reminderEvery')),
            button(t('testBackground'), () => { startAudioKeepAlive(); scheduleChimeIn(10000); }),
            button(t('testReminder'), () => { const now = Date.now(); update({ now, previewAt: now, previewUntil: now + 8000 }, false); if (state.sound) playChime(); setOpen(false); if (panelMode) layout.selectPanel(null); }),
            h('div', { className: 'llm-summary' }, reminderLabel(model))),
          model.notice && h('div', { className: 'llm-notice', role: 'status' }, t(model.notice), h('div', { className: 'llm-controls' }, button(t('got'), () => update({ notice: '' })), model.status === 'running' && button(t('snooze'), () => update({ notice: '', nextReminder: Date.now() + 10 * 60000 })), button(t('today'), () => update({ notice: '', pausedDate: new Date().toDateString() })))),
          h('details', { className: 'llm-disclosure' }, h('summary', null, `${t('radar')} · ${radarSummary}`),
            groups.waiting.length > 0 || groups.running.length > 0 || groups.unread.length > 0
              ? h(React.Fragment, null, renderGroup(t('radarWaiting'), groups.waiting), renderGroup(t('radarRunning'), groups.running), renderGroup(t('radarUnread'), groups.unread))
              : h('div', { className: 'llm-sub' }, t(catalog.phase === 'ready' ? 'radarEmpty' : 'connecting')),
            !radarCount && h('div', { className: 'llm-sub' }, t('radarEmpty')),
            (groups.running.length > 3 || groups.unread.length > 3 || groups.waiting.length > 3) && button(t(showAll ? 'showLess' : 'showAll'), () => setShowAll(!showAll)),
            navigationError && h('div', { role: 'status' }, navigationError)), 
          h('details', { className: 'llm-disclosure' },
            h('summary', null, t('appearance')),
            h('div', { className: 'llm-settings' }, scenes.map((scene, index) => button(t(scene.key), () => update({ scene: index }), { key: scene.key, 'aria-pressed': model.scene === index }))),
            h('div', { className: 'llm-settings' }, button(`${t('background')} · ${t(model.bgOn ? 'on' : 'off')}`, () => update({ bgOn: !model.bgOn }), { role: 'switch', 'aria-checked': model.bgOn })),
            model.bgOn && h('div', { className: 'llm-sliders' },
              h('div', { className: 'llm-sub' }, t('backgroundAdjust')),
              h('label', null, t('brightness'), h('input', { type: 'range', min: 70, max: 180, value: model.brightness, onChange: (event) => update({ brightness: Number(event.target.value) }) }), h('output', null, `${model.brightness}%`)),
              h('label', null, t('intensity'), h('input', { type: 'range', min: 15, max: 75, value: model.intensity, onChange: (event) => update({ intensity: Number(event.target.value) }) }), h('output', null, `${model.intensity}%`))),
            h('div', { className: 'llm-settings' }, button(t(model.readingProtection ? 'workMode' : 'scenicMode'), () => update({ readingProtection: !model.readingProtection }), { role: 'switch', 'aria-checked': model.readingProtection, 'aria-label': t('readingMode') })),
            h('div', { className: 'llm-settings' }, button(`${t('drift')} · ${t(model.drift ? 'on' : 'off')}`, () => update({ drift: !model.drift }), { role: 'switch', 'aria-checked': model.drift })),
          ),
          h('details', { className: 'llm-disclosure' }, h('summary', null, weatherText(model)),
            h('div', { className: 'llm-summary' }, `${t('stale')}: ${model.weather?.time?.replace('T', ' ') || '—'}`),
            h('div', { className: 'llm-controls' }, button(t('nanjing'), () => useNanjing()), button(t(model.locating ? 'locating' : 'locate'), locateWeather, { disabled: model.locating }), button(t('refresh'), () => void loadWeather())),
            model.locationError && h('div', { className: 'llm-sub', role: 'status' }, t('locationError')),
            h('div', { className: 'llm-sub' }, t('privacy')),
            h('a', { href: 'https://open-meteo.com/', target: '_blank', rel: 'noopener noreferrer', className: 'llm-sub' }, 'Weather: Open-Meteo · CC BY 4.0')))));
    }
    function Icon({ size = 24 }) { return h('img', { src: asset(scenes[0].name), alt: '', width: size, height: size, style: { display: 'block', borderRadius: '50%', objectFit: 'cover', objectPosition: '73% 80%' } }); }
    return {
      inject: ['slots', 'layout', 'locale', 'timer', 'uiWorkspace'],
      apply(ctx) {
        layout = ctx.layout;
        workspace = ctx.uiWorkspace;
        translate = ctx.locale.bind(ID);
        state = initialState(storage.read());
        // Arm the audio schedule for a restored running session (the first gesture resumes it).
        try { syncScheduledChimes(); } catch { /* audio may still be locked until a gesture */ }
        ctx.effect(() => ctx.locale.register(ID, 'zh', zh), 'lumululu-mei Chinese');
        ctx.effect(() => ctx.locale.register(ID, 'en', en), 'lumululu-mei English');
        ctx.effect(() => {
          weatherActive = true;
          void loadWeather();
          const stop = ctx.timer.interval(() => void loadWeather(), 15 * 60000);
          return () => { weatherActive = false; locationGeneration++; weatherController?.abort(); stop(); };
        }, 'lumululu-mei weather');
        ctx.effect(() => { tick(); return ctx.timer.interval(() => tick(), 1000); }, 'lumululu-mei focus clock');
        ctx.effect(() => {
          const onVisible = () => { if (document.visibilityState === 'visible') syncScheduledChimes(); };
          document.addEventListener('visibilitychange', onVisible);
          return () => document.removeEventListener('visibilitychange', onVisible);
        }, 'momolulu chime resync');
        ctx.effect(() => {
          const control = createFullscreenControl({
            active: () => document.fullscreenElement === document.documentElement,
            enter: () => document.documentElement.requestFullscreen(),
            exit: () => document.exitFullscreen(),
            report: (fullscreen, fullscreenError) => update({ fullscreen, fullscreenError }, false),
          });
          fullscreenControl = control;
          const onChange = () => control.changed();
          onChange();
          document.addEventListener('fullscreenchange', onChange);
          return () => { document.removeEventListener('fullscreenchange', onChange); control.dispose(); if (fullscreenControl === control) fullscreenControl = undefined; };
        }, 'lumululu-mei fullscreen lifecycle');
        ctx.inject(['commandUi'], (scope) => {
          const commandUi = scope.get('commandUi');
          if (commandUi === undefined) return;
          scope.effect(() => {
            try {
              return commandUi.register({
                name: 'focus',
                label: () => t('focusCommand'),
                description: () => t('focusCommandHint'),
                available: () => true,
                ui: { kind: 'action', run: () => { if (state.status === 'running') pause(); else startFocused(); } },
              });
            } catch (error) {
              // A host /focus command or another plugin may already own the name; the widget still works without it.
              console.warn('momolulu: /focus command unavailable', error);
              return () => {};
            }
          }, 'momolulu /focus command');
        });
        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: 'lumululu-mei', order: 18, label: () => t('title') }, Icon));
        ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'lumululu-mei' }, (props) => h(Companion, { ...props, panelMode: true })));
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'lumululu-mei-overlay', order: 100, label: () => t('title') }, Companion));
      },
    };
  },
});
