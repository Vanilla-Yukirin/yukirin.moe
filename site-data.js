// 站点入口配置：增删改下面的条目即可，
// 主页的链接矩阵和 LINKS 页的路线图都会自动跟着更新（编号、配色自动分配）。
// 字段说明：
//   name  显示名称（主页矩阵会自动转大写）
//   kind  动作标签（READ / FIND / MEET / VISIT / USE ...）
//   desc  一句英文小注
//   url   目标地址
//   color 可选，指定色块颜色（CSS 颜色值或 var(--xxx)），不填则按调色板轮换
window.SITE_DATA = {
  links: [
    { name: "Blog",     kind: "READ",  desc: "notes & journal",       url: "https://vanilla-chan.cn/blog/" },
    { name: "CNBlog",   kind: "READ",  desc: "another writing shelf", url: "https://www.cnblogs.com/Vanilla-chan" },
    { name: "Github",   kind: "FIND",  desc: "code & projects",       url: "https://github.com/Vanilla-Yukirin" },
    { name: "About Me", kind: "MEET",  desc: "a longer introduction", url: "https://vanilla-chan.cn/blog/about/" },
    { name: "Friends",  kind: "VISIT", desc: "people & places",       url: "https://vanilla-chan.cn/blog/links/" },
    { name: "Tools",    kind: "USE",   desc: "small utilities",       url: "https://vanilla-chan.cn/blog/tools/" }
  ]
};
