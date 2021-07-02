const navconf = require('./nav.js');
const songSheetconf = require('./songSheet.js');
const sidebarconf = require('./sidebar.js');

module.exports = {
  "title": "9527",
  "description": "后天的成功一定会感谢先天的努力",
  "dest": "/dist",
  "plugins": [
    [
      //图片放大插件 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      '@vuepress/plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],

    ["@vuepress-reco/vuepress-plugin-bgm-player", {
      audios: songSheetconf,
      // 自动缩小
      autoShrink: true,
      // 悬浮窗模式，吸边
      shrinkMode: 'mini',
      // 悬浮窗位置
      floatStyle:{ bottom: '10px', 'z-index': '999999'},
      autoplay: true
    }],

    //音乐播放器
    // ['meting', {
    //     // metingApi: "http://music.163.com/#/song?id=440353010",
    //     meting: {
    //       // 网易
    //       // server: "netease",
    //       // // 读取歌单
    //       // type: "playlist",
    //       // mid: "440353010",
    //       auto: "https://music.163.com/#/playlist?id=2539599584"
    //     },          
    //     // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //       // 吸底模式
    //       fixed: true,
    //       mini: true,
    //       // 自动播放
    //       autoplay: true,
    //       // 歌曲栏折叠
    //       listFolded: true,
    //       // 颜色
    //       theme: '#ff0000',
    //       // 播放顺序为随机
    //       order: 'random',
    //       // 初始音量
    //       volume: 0.4,
    //       // 关闭歌词显示
    //       lrcType: 0
    //     },
    //     mobile :{
    //       // 手机端去掉cover图
    //       cover: false,
    //     }
    //   }
    // ]
  ],
  "head": [
    ["link", {
        "rel": "icon",
        "href": "/img/favicon.ico"
    }],

    ["meta",{
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
    }],

    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],

    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": navconf,
    "sidebar": sidebarconf,

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },

    //友链
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
      {
        "title": "白开水", //友联标题
        "desc": "越努力，越热爱，越幸运",  //友链描述
        "email": "846188037@qq.com",  //友链邮箱
        "link": "https://www.hjxie.icu" //友链地址
      }
    ],

    "logo": "/img/WechatIMG21.jpg", //导航栏logo
    "search": true, //搜索
    "searchMaxSuggestions": 10, //最大搜索建议
    "lastUpdated": "Last Updated", //最后更新
    "author": "xpz0745", //作者
    "authorAvatar": "/img/WechatIMG21.jpg",  //作者头像
    "record": "99999999999999", //备案号
    "startYear": "2021", //开始年份
    "sidebarDepth": 2,
  },

  "markdown": {
    "lineNumbers": true
  }
}