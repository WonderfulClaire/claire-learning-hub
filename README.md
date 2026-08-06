# 🧭 claire-learning-hub · 学习站中枢（共享后端）

把分散在 GitHub 上的学习站，用「一套后端、多端打通」的思路联动成一个学习宇宙。
灵感来自秒哒（妙搭）的 **共享后端** 概念，但完全跑在 GitHub 免费生态里、不花一分钱。

## 它是什么

- **共享后端** = 本仓库的 [`sites.json`](sites.json)：所有学习站的唯一数据源（名字 / 链接 / 简介 / 状态）。
- **多端协同** = 每个学习站注入一段几百字节的导航脚本，运行时从 jsDelivr 拉取 `sites.json`，在顶部渲染「📚 我的学习站」联动条。
- **实时同步** = 改一次 `sites.json`，所有站的导航条下一次加载就更新（类比秒哒「小程序下单 → PC 后台实时看到」）。

## 技术栈（全免费）

| 角色 | 服务 | 费用 |
|------|------|------|
| 静态托管 | GitHub Pages | 免费 |
| CDN 分发 `sites.json` | jsDelivr（`@gh/WonderfulClaire/claire-learning-hub`） | 免费 |
| 前端拉取 | 纯 `fetch` + 原生 JS | 免费 |

## 已联动的学习站

| 站点 | 地址 | 说明 |
|------|------|------|
| 🏸 羽毛球系统学习站 | https://wonderfulclaire.github.io/badminton-court-lab/index.html | 动作技巧 + 19 球路 + 双打轮转 |
| 🏊 游泳训练分析 swim-coach | https://wonderfulclaire.github.io/swim-coach/ | Apple Watch 数据 → 计划 + 分析 |
| 📝 托福写作范文 | https://wonderfulclaire.github.io/toefl-learn/ | 综合写作 + 学术讨论范文 |
| 📐 智能穿戴数学基础 | https://wonderfulclaire.github.io/smart-wearable-math-foundations/ | AI Infra 数学地基（VitePress） |
| 🎹 钢琴音乐学习 | https://wonderfulclaire.github.io/music-learn/piano/index.html | 识谱 / 乐理 / 大调 / 技巧 |
| 🧭 本中枢 | https://wonderfulclaire.github.io/claire-learning-hub/ | 共享入口 + 状态板 |

## 加一个新站点只需两步

1. 在 `sites.json` 里加一条 `{ "name", "icon", "url", "desc", "status" }`；
2. 新站注入同一段导航脚本（见各站源码顶部注释）。

下一次所有站的联动条会自动出现新站点——**一处修改，全站同步**。

> 想看联动条长啥样？打开上面任意学习站，页面顶部那条深色「📚 我的学习站」就是。
