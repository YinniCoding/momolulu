# momolulu

A companion photo for DeepSeek Harness: focus timing, water reminders, weather, and a radar showing which session just finished.

[中文](README.md) | **English**

[![npm](https://img.shields.io/npm/v/momolulu.svg)](https://www.npmjs.com/package/momolulu)
[![downloads](https://img.shields.io/npm/dm/momolulu.svg)](https://www.npmjs.com/package/momolulu)
[![license](https://img.shields.io/npm/l/momolulu.svg)](LICENSE)

```sh
dsh plugin --profile web add momolulu
```

![momolulu overview](docs/overview.webp)

## What it does

- **Photo companion**: a scenic card in the lower right with gentle motion; collapse it to an avatar with a countdown.
- **Focus timer**: 15/25/45/60 minutes, pausable. Optionally fullscreen; Esc leaves fullscreen without stopping the timer.
- **Break reminders**: every 20 minutes, a brief nudge to drink water and stretch, with a shake and highlight; optional chime (off by default).
- **Session radar**: running, just-finished, waiting-for-input and permission-requesting sessions; click one to jump to it.
- **Weather**: Open-Meteo, Nanjing by default; location is requested only after you click "Use my location".

Typing `/focus` in the composer also starts or pauses the timer.

Focus requests fullscreen as an optional touch; a denied request never affects the timer.

## Install

```sh
dsh plugin --profile web add momolulu
```

Desktop: **Plugins → Add plugin → `momolulu`**, then restart once.

> Disable the older `@local/lumululu-mei` first; both would render the same companion.

## Privacy

Preferences and timer state stay in browser `localStorage` and are never uploaded. The radar reads local session state only; the sole network request is weather. See [PRIVACY.md](PRIVACY.md).

## Known limitations

Sub-agent conversations are listed and tagged; no cross-window timer sync; timers are not OS alarms and stop when DSH is closed; no built-in updater.

## Development

```sh
npm run check && npm test
```

## License

Code [MIT](LICENSE); artwork [CC BY 4.0](LICENSE-ARTWORK.md). Weather data by [Open-Meteo](https://open-meteo.com/). Not affiliated with DeepSeek.
