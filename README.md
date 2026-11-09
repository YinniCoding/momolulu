# momolulu

给 DeepSeek Harness 加一张会陪你的照片：专注计时、喝水提醒、天气，还有能看到哪个会话跑完的会话雷达。

**中文** | [English](README.en.md)

[![npm](https://img.shields.io/npm/v/momolulu.svg)](https://www.npmjs.com/package/momolulu)
[![downloads](https://img.shields.io/npm/dm/momolulu.svg)](https://www.npmjs.com/package/momolulu)
[![license](https://img.shields.io/npm/l/momolulu.svg)](LICENSE)

```sh
dsh plugin --profile web add momolulu
```

![momolulu 概览](docs/overview.webp)

## 它做什么

- **照片陪伴**：右下角一张风景照，轻微浮动；可缩成带倒计时的小头像。
- **专注计时**：15/25/45/60 分钟，可暂停。开始时可全屏，Esc 退出全屏但不停表。
- **休息提醒**：每 20 分钟提示喝水、起来活动，到点轻晃一下并高亮。
- **会话雷达**：列出运行中、刚结束、等待输入、请求权限的会话，点一下就跳过去。
- **天气**：Open-Meteo，默认南京；点「使用当前位置」才会请求定位。

开始专注会请求全屏，这是可选的氛围；被拒绝也不影响计时。

## 安装

```sh
dsh plugin --profile web add momolulu
```

桌面版：**插件 → 添加插件 → 输入 `momolulu`**，装完重启一次。

> 换装前请先停用旧的 `@local/lumululu-mei`，两者会同时渲染。

## 隐私

偏好和计时只存在浏览器 `localStorage`，不上传；雷达只读本地会话状态；唯一的网络请求是天气。详见 [PRIVACY.md](PRIVACY.md)。

## 已知限制

只支持普通会话（不含子代理）；多窗口不同步计时；计时不是系统闹钟，关掉 DSH 就不会准时触发；未内置自动更新。

## 开发

```sh
npm run check && npm test
```

## 许可

代码 [MIT](LICENSE)；图片素材 [CC BY 4.0](LICENSE-ARTWORK.md)。天气数据来自 [Open-Meteo](https://open-meteo.com/)，与 DeepSeek 无隶属关系。
