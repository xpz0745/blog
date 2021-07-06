const navconf = require('./modules/nav.js');
const songSheetconf = require('./modules/songSheet.js');
const sidebarconf = require('./modules/sidebar.js');

module.exports = {
    title: "9527",
    description: "后天的成功一定会感谢先天的努力",
    dest: "/dist",
    plugins: [
        [require('./plugins/BgMusic'), 
			{
				audios: songSheetconf,
				autoplay: true,
				autoShrink: true,
				
            }
        ],
    ],
    head: [
        ["link", {rel:"icon", href:"/img/favicon.ico"}],
        ["meta", {name:"viewport", content:"width=device-width,initial-scale=1,user-scalable=no"}],
        // ["script", {language:"javascript", type:"text/javascript", src:"https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
		// ["script", {language:"javascript", type:"text/javascript", src:"/js/MouseClickEffect.js"}],
	],
    theme: "reco",
    themeConfig: {
        nav: navconf,
        sidebar: sidebarconf,
        type: "blog",
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon:'reco-github', link:'https://github.com/xpz0745'}
            ]
        },
        //友链
        friendLink: [
            {
                title: "午后南杂",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://www.recoluan.com"
            },
            {
                title: "vuepress-theme-reco",
                desc: "A simple and beautiful vuepress Blog & Doc theme.",
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        logo: "/img/WechatIMG21.jpg", //导航栏logo
        search: true, //搜索
        searchMaxSuggestions: 10, //最大搜索建议
        lastUpdated: "Last Updated", //最后更新
        author: "xpz0745", //作者
        authorAvatar: "/img/WechatIMG21.jpg",  //作者头像
        record: "99999999999999", //备案号
        startYear: "2021", //开始年份
        sidebarDepth: 2,
        subSidebar: 'auto',
        // valineConfig: {

        // }
    },
    markdown: {
        lineNumbers: true
    }
}