---
title: apktool反编译报错
date: 2021-11-01
tags:
 - apktool
---

# apktool反编译出错：assets有dex文件导致apk反编译出错
<br/>
apktool反编译apk出错如下：

Exception in thread "main" org.jf.util.ExceptionWithContext: Encountered small uint that is out of range at offset 0x38

![](https://img-blog.csdnimg.cn/20200623110821354.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzOTc5NjU3,size_16,color_FFFFFF,t_70)

报错的原因是apk中不止smali目录下面的dex文件，其他地方比如assets下面也有， 而assets下面的dex文件不是正常的dex文件，所以反编译就会出错。

解决方法：

添加–only-main-classes参数即可，示例：

apktool d game.apk --only-main-classes

:::warning

PS：apktool的版本要在2.6.0以上。

[http://121.40.49.66/downloads/apktool](http://121.40.49.66/downloads/apktool)

[http://121.40.49.66/downloads/apktool.jar](http://121.40.49.66/downloads/apktool.jar)
:::

原文链接：[https://blog.csdn.net/qq_33979657/article/details/106918800](https://blog.csdn.net/qq_33979657/article/details/106918800)