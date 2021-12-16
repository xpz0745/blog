---
title: Valine评论系统
date: 2021-7-19
tags:
 - comment
---

## Valine使用方法

关于Valine的评论系统，其实vuepress-theme-reco主题已经给出了解释[点击此处](https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html)，可以选择Valine和Vssue两种评论系统，我这边选择了Valine，下面说一说Valine的基本使用吧。

首先按照官网的说法在config里配置如下：

###  Valine

```sh
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

> 如果 valine 的获取评论的接口报 `404` 错误的话，不用担心，这是因为你还没有添加评论，只要存在1条评论，就不会报错了，这是 `leanCloud` 的请求处理操作而已；

其它的参数可以参考[Valine官网](https://valine.js.org/configuration.html)。

valineConfig的参数需要到[LeanCloud官网](https://www.leancloud.cn/)注册。注册的时候可以先选择开发版，注册完成之后，在设置页面当中的应用凭证可以找到appId和appKey。

<img src="http://121.40.49.66/img/leanCloudImg.jpg" />

:::warning

PS：记得在安全中心里把自己的域名填上，否则可能会报 `Code 403: 访问被API域名白名单拒绝，请检查你的安全域名设置.`的问题。

:::

然后配置到config里面，之后就可以在数据存储 > 结构化数据里看到所有的评论了。

<img src="http://121.40.49.66/img/leanCloudImg-1.png" />

