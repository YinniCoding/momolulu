# momolulu

A gentle coding companion for DeepSeek Harness (DSH): scenic photos, a focus timer, wellbeing reminders, weather, and a session radar.

让 momolulu 陪你编程：照片陪伴、专注计时、喝水与站立提醒、天气，以及跨会话快捷定位。

![momolulu scenic artwork](assets/scene-lake.jpg)

## Features / 功能

- Floating photo companion, subtle motion, compact avatar and progress ring.
- 15 / 25 / 45 / 60-minute focus countdown, pause/resume, reset and fullscreen entry on a user click.
- Water/stretch reminders every 20 minutes, brief motion and highlighting, snooze, and an 8-second preview.
- Weather for Nanjing by default; optional user-initiated location lookup through Open-Meteo.
- Session radar: running conversations, ended/unread conversations, input requests and permission requests; click a row to navigate.
- Passive radar alerts never answer questions, grant permissions, or switch conversations automatically.
- Reading-protection mode, adjustable background brightness/opacity, Chinese and English copy, reduced-motion support.

## Install / 安装

Designed for **DSH 0.2.2-rc.1**. Other DSH versions are not yet verified. The package declares this exact runtime requirement conservatively.

In DSH's plugin installer, install the commit-pinned Git specification listed in the GitHub release notes. Alternatively clone this repository and ask DSH's plugin manager to install its absolute directory as a bundle. Do not run a separate Web server.

**Existing local users:** disable or uninstall `@local/lumululu-mei` before enabling `momolulu`; both packages render the same companion. The existing `llm.companion.v2` storage key is retained, so preferences and timer data can continue on the same browser origin. Keep a backup if you need to roll back.

### Discover / 市场索引

If your DSH profile has the optional plugin-market Discover feature enabled, add this index source:

```
https://raw.githubusercontent.com/YinniCoding/momolulu/main/market.json
```

This is a **self-hosted index**, not a claim of inclusion in a central or official marketplace. It points to a fixed Git commit. npm publication has not been performed.

## Use / 使用

- Click the photo to open the focus panel; use its quick play/pause control without opening the panel.
- Click `−` to minimize to an avatar, then click the avatar to restore the photo.
- Open **Reminder settings → Test reminder (8 sec)** to preview motion/highlighting without changing deadlines.
- Click the radar summary or avatar badge to inspect other conversations; click a row to open it.
- Open **Appearance** for scene, motion, reading protection, background brightness and opacity controls.
- Starting focus requests browser fullscreen. Esc exits fullscreen without stopping the timer. Pause, completion and plugin unload do not force fullscreen exit.

## Privacy / 隐私

See [PRIVACY.md](PRIVACY.md). No plugin analytics or developer backend is used. Weather makes third-party requests; local preference/timer storage is browser-local. Location is optional.

## Known limitations / 已知限制

- Radar lists ordinary conversations, not child-agent conversations. Ended/unread does not imply successful execution; unread state is page-local and may be lost on refresh.
- Multiple windows do not synchronize focus timer state.
- Browser/Electron policies may deny fullscreen or location. These failures should not prevent focus timing.
- Timers and visual reminders are not OS alarms: closing DSH or suspending the device prevents timely delivery; the countdown catches up when ticks resume.
- Default weather city is Nanjing. Located coordinates are rounded to two decimal places and held only in memory.
- Automated tests cover clock logic, radar classification/attention, and fullscreen control with an injected test port. Cross-platform visual layout and genuine fullscreen/navigation/permission events still require manual verification.
- No automatic updater is included. Follow the DSH plugin manager's supported uninstall/reinstall procedure for a newer release.

## Development

Requires Node.js 20 or newer for local checks; no build step or install scripts are required.

```sh
npm run check
npm test
npm pack --dry-run
```

## Rights and attribution

See [NOTICE.md](NOTICE.md). This repository is publicly readable but is **not currently licensed as open source**. Weather data: [Open-Meteo](https://open-meteo.com/), CC BY 4.0. No affiliation with DeepSeek or character-rights owners is implied.
