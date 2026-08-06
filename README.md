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

## 已联动的学习站与教学仓库

实时目录来自 [`sites.json`](sites.json)（共 18 个）。其中带 `github.io` 的是可交互学习站/教学页，带 `github.com` 的是纯 README 教学仓库。

| 站点 | 地址 | 类型 | 说明 |
|------|------|------|------|
| 🤖 交互式机器学习 ml-interactive | https://wonderfulclaire.github.io/ml-interactive/ml.html | 学习站 | 分层课程 + 5 个可动手 lab |
| 📝 托福写作范文 | https://wonderfulclaire.github.io/toefl-learn/ | 学习站 | 综合写作 + 学术讨论范文 |
| 🏸 羽毛球系统学习站 | https://wonderfulclaire.github.io/badminton-court-lab/index.html | 学习站 | 动作技巧 + 19 球路 + 双打轮转 |
| 🏊 游泳训练分析 swim-coach | https://wonderfulclaire.github.io/swim-coach/ | 学习站 | Apple Watch 数据 → 计划 + 分析 |
| 🎹 钢琴音乐学习 | https://wonderfulclaire.github.io/music-learn/piano/index.html | 学习站 | 识谱 / 乐理 / 大调 / 技巧 |
| 📐 智能穿戴数学基础 | https://wonderfulclaire.github.io/smart-wearable-math-foundations/ | 学习站 | AI Infra 数学地基（VitePress） |
| 🍵 茶 · 品鉴与冲泡 | https://wonderfulclaire.github.io/tea/tea.html | 教学页 | 六大茶类 + 冲泡参数 + 计算器 |
| 🎬 电影 · 怎么看明白 | https://wonderfulclaire.github.io/films/films.html | 教学页 | 类型谱系 + 必看片单 + 匹配器 |
| 👟 鞋 · 选穿养 | https://wonderfulclaire.github.io/shoes/shoes.html | 教学页 | 场景选鞋 + 尺码换算 + 保养 |
| ⚫ 围棋 · 规则与死活 | https://wonderfulclaire.github.io/go/go.html | 教学页 | 规则 + 术语 + 9 路互动棋盘 |
| 🎿 滑雪 · 雪道到刹车 | https://wonderfulclaire.github.io/skiing/skiing.html | 教学页 | 雪道等级 + 装备 + 安全速查 |
| 🇨🇳 理解中国社会 | https://github.com/WonderfulClaire/understanding-chinese-society | 教学仓库 | 8 维度认知地图（带数据来源） |
| 📈 百位创业者史 | https://github.com/WonderfulClaire/history-entrepreneurs-100 | 教学仓库 | 100 位创业者索引 + 收录原则 |
| 🌸 香水选购 | https://github.com/WonderfulClaire/perfume-selector | 教学仓库 | 10 香调家族 × 3 档价位选香树 |
| ☕ 咖啡品鉴 | https://github.com/WonderfulClaire/coffee-selector | 教学仓库 | 16 款谱系 + 风味轮 + 冲煮参数 |
| 👗 穿搭风格 | https://github.com/WonderfulClaire/style-finder | 教学仓库 | 8 类风格速查 + 搭配公式 |
| ⌚ 腕表入门 | https://github.com/WonderfulClaire/watch-guide | 教学仓库 | 机械/石英/智能表 + 选购避坑 |
| 🧭 本中枢 | https://wonderfulclaire.github.io/claire-learning-hub/ | 入口 | 共享入口 + 状态板 |

## 加一个新站点只需两步

1. 在 `sites.json` 里加一条 `{ "name", "icon", "url", "desc", "status" }`；
2. 新站注入同一段导航脚本（见各站源码顶部注释）。

下一次所有站的联动条会自动出现新站点——**一处修改，全站同步**。

> 想看联动条长啥样？打开上面任意学习站，页面顶部那条深色「📚 我的学习站」就是。
