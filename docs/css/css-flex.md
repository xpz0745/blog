---
title: Css-flex布局
date: 2021-10-11
tags:
 - css
---

## Css-flex布局：

### 一、flex-direction 属性
:::tip
`flex-direction` 属性定义容器要在哪个方向上堆叠 flex 项目。<br/>
`column` 值设置垂直堆叠 flex 项目（从上到下）<br/>
`column-reverse` 值垂直堆叠 flex 项目（但从下到上）<br/>
`row` 值水平堆叠 flex 项目（从左到右）<br/>
`row-reverse` 值水平堆叠 flex 项目（但从右到左）
:::

### 二、flex-wrap 属性
:::tip
`flex-wrap` 属性规定是否应该对 flex 项目换行。<br/>
`wrap` 值规定 flex 项目将在必要时进行换行<br/>
`nowrap` 值规定将不对 flex 项目换行（默认）<br/>
`wrap-reverse` 值规定如有必要，弹性项目将以相反的顺序换行
:::

### 三、flex-flow 属性
:::tip
`flex-flow` 属性是用于同时设置 flex-direction 和 flex-wrap 属性的简写属性。
:::

### 四、justify-content 属性
:::tip
`justify-content` 属性用于水平对齐 flex 项目。<br/>
`center` 值将 flex 项目在容器的中心对齐<br/>
`flex-start` 值将 flex 项目在容器的开头对齐（默认）<br/>
`flex-end` 值将 flex 项目在容器的末端对齐<br/>
`space-around` 值显示行之前、之间和之后带有空格的 flex 项目<br/>
`space-between` 值显示行之间有空格的 flex 项目
:::

### 五、align-content 属性
:::tip
`align-content` 属性用于对齐弹性线。<br/>
`space-between` 值显示的弹性线之间有相等的间距<br/>
`space-around` 值显示弹性线在其之前、之间和之后带有空格<br/>
`stretch` 值拉伸弹性线以占据剩余空间（默认）<br/>
`center` 值在容器中间显示弹性线<br/>
`flex-start` 值在容器开头显示弹性线<br/>
`flex-end` 值在容器的末尾显示弹性线
:::

### 六、align-items 属性
:::tip
`align-items` 属性用于垂直对齐 flex 项目。<br/>
`center` 值将 flex 项目在容器中间对齐<br/>
`flex-start` 值将 flex 项目在容器顶部对齐<br/>
`flex-end` 值将弹性项目在容器底部对齐<br/>
`stretch` 值拉伸 flex 项目以填充容器（默认）<br/>
`baseline` 值使 flex 项目基线对齐
:::

### 七、完美居中
:::tip
将 `justify-content` 和 `align-items` 属性设置为居中，然后 flex 项目将完美居中。
:::

## Css-flex布局之子元素：
flex 容器的直接子元素会自动成为弹性（flex）项目。

### 一、order 属性
:::tip
`order` 属性规定 flex 子元素的顺序，并且可以改变 flex 子元素的顺序，值必须是数字，默认值是 0。
:::

### 二、flex-grow 属性
:::tip
`flex-grow` 属性规定某个 flex 子元素相对于其余 flex 子元素将增长多少，值必须是数字，默认值是 0。
:::

### 三、flex-shrink 属性
:::tip
`flex-shrink` 属性规定某个 flex 子元素相对于其余 flex 子元素将收缩多少，值必须是数字，默认值是 0。`(0为不可收缩)`
:::

### 四、flex-basis 属性
:::tip
`flex-basis` 属性规定 flex 子元素的初始长度。
:::

### 五、flex 属性
:::tip
`flex` 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
:::

### 六、align-self 属性
:::tip
`align-self` 属性规定弹性容器内所选项目的对齐方式，且会覆盖容器的 align-items 属性所设置的默认对齐方式。<br/>
`center` 值将子元素在容器垂直对齐。<br/>
`flex-start` 值将子元素在容器顶部对齐。<br/>
`flex-end` 值将子元素在容器底部对齐。
:::