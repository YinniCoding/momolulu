# Privacy / 隐私说明

## Local data

momolulu uses browser `localStorage` under `llm.companion.v2` for focus deadlines, preferences and reminder settings. It has no developer-operated server and no analytics. Runtime fields may be serialized with preferences; weather readings may therefore appear in that local record. Located coordinates are not added to the stored state. The state is local to the DSH page origin and does not synchronize across windows/devices.

## Weather and location

On activation and approximately every 15 minutes, the Client requests `https://api.open-meteo.com/v1/forecast` with Nanjing coordinates (32.06, 118.80), unless you actively choose another location through the location button. The service necessarily receives network connection information such as the client IP address. Requests omit browser credentials and referrers.

Geolocation is requested only after you click **Use my location**. Your browser/OS may request permission. Coordinates are rounded to two decimal places and sent to Open-Meteo for weather. They stay in memory until plugin/page disposal; refresh returns to Nanjing. Location failure falls back to Nanjing. A permission decision remains entirely with the browser/OS and the user.

## Session radar

The Client reads the DSH-provided session catalog and status hooks. Titles, working directories, running flags, unread-completion flags and pending-interaction kinds are used locally for display/navigation. They are not sent to Open-Meteo or the developer. Radar never calls permission-answer or question-answer methods. Clicking a row invokes DSH's own conversation navigation.

## Removal

Uninstalling the plugin need not clear browser storage. Remove the `llm.companion.v2` localStorage entry using your browser's site-data controls if you want to remove saved preferences and timer data. Removing DSH site data may affect other plugins, so prefer removing only this key.

中文摘要：天气默认查询南京；只有点击定位后才请求位置并发送经过舍入的坐标。会话数据仅在 DSH 页面内用于显示和跳转，不发送给天气服务或开发者。插件不会自动批准权限或替你回答问题。
