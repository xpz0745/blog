module.exports = [
    {
        text: "主页",
        link: "/",
        icon: "reco-home"
    },
    {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
    },
    {
        text: "文章",
        icon: "reco-blog",
		link: "/docs/article/"
    },
    {
        text: "工具箱",
        icon: "reco-menu",
        items: [
            {
                text: "在线编辑",
                items: [
                    {
                        text: "在线AES加解密",
                        link: "http://tool.chacuo.net/cryptaes"
                    },
                    {
                        text: "生成favicon.ico",
                        link: "https://tool.lu/favicon/"
                    },
                    {
                        text: "在线图片编辑",
                        link: "https://www.gaoding.com/"
                    },
                    {
                        text: "在线获取音乐外链",
                        link: "https://music.xf1433.com/"
                    }
                ]
            },
            {
                text: "在线服务",
                items: [
                    {
                        text: "阿里云",
                        link: "https://www.aliyun.com/"
                    },
                    {
                        text: "腾讯云",
                        link: "https://cloud.tencent.com/"
                    }
                ]
            }
        ]
    },
    {
        text: "关于",
        icon: "reco-account",
        link: "/about/"
    },
	{
	    text: "联系",
	    icon: "reco-message",
		items: [
			{
				text: "wechat",
				icon: "reco-wechat",
				link: "/contact/wechat/"
			},
			{
				text: "qq",
				icon: "reco-qq",
				link: "/contact/qq/"
			}
		]
	}
]