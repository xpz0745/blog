const navConf = require('./modules/nav.js');
const sidebarConf = require('./modules/sidebar.js');

module.exports = {
    title: "xpz0745",
    description: "后天的成功一定会感谢先天的努力",
    plugins: [
		['meting', 
			{
		        meting: {
					auto: "http://music.163.com/#/song?id=1387581250"
		        },
		        aplayer: {
		          // 吸底模式
		          mini: true,
		          // 自动播放
		          autoplay: true,
		          // 歌曲栏折叠
		          listFolded:true,
		          // 颜色
		          theme: '#FF34B3',
		          // 播放顺序为随机
		          order: 'random',
		          // 初始音量
		          volume: 0.5,
		          // 关闭歌词显示
		          lrcType: 0,
		        },
		        mobile :{
		          // 手机端去掉cover图
		          cover: false,
		        }
		    },
		]
    ],
    head: [
        ["link", {rel:"icon", href:"/img/favicon.ico"}],
        ["meta", {name:"viewport", content:"width=device-width,initial-scale=1,user-scalable=no"}],
		["script", {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?087064a1dfed0b8c21234e64f4521980";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
			})();
		`],
	],
    theme: "reco",
    themeConfig: {
        nav: navConf,
        sidebar: sidebarConf,
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
                {icon:'reco-github', link:'https://github.com/xpz0745'}
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
            },
			{
			    title: "Top Top Top",
			    desc: "This is a Topwo website.",
			    avatar: "http://space.topwo.com/topwoassets/image/logo@100x100.png",
			    link: "http://blog.topwo.com/"
			}
        ],
        logo: "/img/authorAvatar.jpg", //导航栏logo
        search: true, //搜索
        searchMaxSuggestions: 10, //最大搜索建议
        lastUpdated: "Last Updated", //最后更新
        author: "xpz0745", //作者
        authorAvatar: "/img/authorAvatar.jpg",  //作者头像
        record: "皖ICP备2021010605号", //ICP备案号
		recordLink: "http://beian.miit.gov.cn/",  //ICP备案链接地址
		cyberSecurityRecord: "99999999",  //公网安备号
		cyberSecurityLink: "",  ////公网安备链接地址
        startYear: "2021", //开始年份
        sidebarDepth: 3,
		subSidebar: 'auto',
		noFoundPageByTencent: false,
        valineConfig: {
			appId: 'vUvdx4fbChOnKyWgjEBNw5xy-gzGzoHsz',// your appId
			appKey: 'vakfJu8wSPmA3uIkChrxrlnw', // your appKey
			placeholder: '来吧，展示！', //默认显示信息
			avatar: 'wavatar', //评论头像
			visitor: false,  //浏览量开关
        }
    },
    markdown: {
        lineNumbers: true
    }
}