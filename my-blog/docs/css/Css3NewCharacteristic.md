---
title: Css3特性
date: 2021-7-12
tags:
 - css
---

## Css3新属性：

### 一、RGBA和透明度

RGBA是RGB色彩模型的一个扩展。在本质上看也是为设置的元素增加了一个 alpha 通道，即除了红绿蓝三种颜色外还增加一个代表透明度的通道，其中 RGB 值分别表示红色、绿色、蓝色，而 alpha 取值则为 0 到 1 （小数位一位）。

### 二、background属性

- background-image：设置元素的背景图像。
- background-origin：规定背景图片的定位区域。
- background-size ：规定背景图片的尺寸。
- background-repeat：设置是否及如何重复背景图像。

### 三、word-wrap属性

word-wrap 属性允许长单词或 URL 地址换行到下一行。

注：所有主流浏览器都支持 word-wrap 属性。

基础语法：

:::tip

```css
word-wrap: normal|break-word;
```

:::

### 四、text-shadow属性

text-shadow 属性：向文本设置阴影。

text-shadow基础语法：

:::tip

```css
text-shadow： 5px 5px 5px #FF0000;
```

:::

参数分别表示：水平阴影，垂直阴影，模糊距离，阴影颜色。

### 五、font-face属性

font-face属性：定义自己的字体

在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

### 六、border-radius属性

border-radius 属性：是一个简写属性，用于设置四个 border-*-radius 属性。

基础语法：

:::tip

```css
border-radius: 1-4 length|% / 1-4 length|%;
```

:::

注：该属性允许您为元素添加圆角边框！

### 七、border-image属性

border-image：将图片规定为包围 div 元素的边框

border-image基础语法：

:::tip

```css
border-image: url(border.png) 30 30 round
```

:::

### 八、box-shadow属性

box-shadow属性：向框添加一个或多个阴影。（盒阴影）

box-shadow基础语法：

:::tip

```css
box-shadow: 10px 10px 5px #888888
```

:::

### 九、媒体查询

媒体查询定义两套css，当浏览器的尺寸变化时会采用不同的属性。
