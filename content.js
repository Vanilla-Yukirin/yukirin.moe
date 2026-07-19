// 站点文案配置：页面上几乎所有文字都在这里改，不需要碰 index.html。
// 用反引号（`）包裹的字符串可以直接换行书写，不需要转义引号；
// 只有正文里真的出现反引号或 ${ 时才需要写成 \` 或 \${。
//
// about.markdown 支持的语法（写起来和普通 Markdown 一样）：
//   ## 小标题
//   - 列表项（连续多行自动并成一个列表）
//   **加粗**        *斜体*
//   ==荧光笔==      黄色高亮        %%荧光笔%%  粉色高亮
//   [链接文字](https://example.com)
//   ---             单独一行：票券打孔分隔线
//   空行分段（段落内部的换行会按一个空格合并，英文可以放心折行）
window.SITE_CONTENT = {
  // 左侧导航栏
  rail: {
    siteName: "VANILLA YUKIRIN",
    siteYear: "2026",
    statusLabel: "MAKING THINGS",        // 侧栏底部与 HOME 页共用的状态文字
    statusSource: "STATUS / DEFAULT",
    statusDot: "#a2bca0",                // 状态圆点颜色
    tip: ["SCROLL / ARROW KEYS", "TO TURN THE PAGE"]  // 数组 = 多行
  },

  // 01 HOME
  home: {
    pageTitle: "PERSONAL PROFILE",
    kicker: "SUBJECT PROFILE / VANILLA",
    name: ["Vanilla", "Yukirin"],        // 数组 = 多行
    motto: "「但 Vanilla 会努力的」",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sign: "/ KEEPING NOTES, MAKING THINGS",
    stamp: ["AFOIer", "ACMer", "MCMer"], // 照片上的印章，每元素一行
    portraitCaption: "VANILLA / YUKIRIN",
    lastUpdate: "2025—12—13",            // 占位值；线上会被 GitHub 最近 commit 时间覆盖
    updateSource: "COMMIT / PLACEHOLDER",
    facts: [
      { term: "PRIMARY ROLE", value: "student / developer", sub: "learning in public" },
      { term: "INTERESTS",    value: "AI · systems · writing", sub: "and a little design" },
      { term: "BASE",         value: "China / online",      sub: "lorem ipsum dolor" },
      { term: "NOW",          value: "Lorem ipsum dolor",   sub: "sit amet consectetur" }
    ],
    footerLabel: "VANILLA / PERSONAL PROFILE",
    nextLabel: "ABOUT ↓"
  },

  // 02 ABOUT
  about: {
    pageTitle: "ABOUT ME",
    microLabel: "ABOUT / SELF INTRODUCTION",
    heading: "Nice to meet you.",
    sideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    tabs: ["PROFILE", "2026"],           // 纸张上沿伸出的两个索引标签
    markdown: `
## Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, ==quis nostrud exercitation ullamco== laboris nisi ut aliquip
ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur, %%excepteur sint occaecat%% cupidatat
non proident.

---

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed do eiusmod tempor incididunt ut labore et dolore.
- Ut enim ad minim veniam, quis nostrud exercitation.
`,
    caption: "CONTENT / FROM CONTENT.JS",
    prevLabel: "↑ HOME",
    nextLabel: "NOTES ↓",
    footerLabel: "VANILLA / ABOUT ME"
  },

  // 03 NOTES（文章列表来自博客 RSS，这里只管栏位文字）
  notes: {
    pageTitle: "FIELD NOTES",
    microLabel: "NOTES / SELECTED RECORDS",
    heading: "Things I want to share.",
    sideText: "技术分享 / 学习笔记 / 生活切片 / 信笔由缰",
    indexLabel: "INDEX / 04 SELECTED",   // 占位值；RSS 加载成功后显示 FEED / LATEST xx
    openBlogLabel: "OPEN BLOG ↗",
    prevLabel: "↑ ABOUT",
    nextLabel: "LINKS ↓",
    footerLabel: "VANILLA / FIELD NOTES"
  },

  // 04 LINKS
  links: {
    pageTitle: "LINKS & ROUTES",
    microLabel: "LINKS / ROUTE MAP",
    heading: "Where to find me.",
    sideText: "博客、代码、朋友和一些我自己做的小工具。",
    routeTitle: "STATUS CHANNEL",
    routeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    postmark: ["YUKIRIN.MOE", "—", "ROUTES / 2026"],  // 邮戳，每元素一行
    prevLabel: "↑ NOTES",
    homeLabel: "BACK TO TOP ↑",
    footerLabel: "VANILLA / LINKS & ROUTES"
  }
};
