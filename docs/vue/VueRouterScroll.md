---
title: vue路由滚动行为
date: 2021-7-12
tags:
 - vue2.0
---

##  滚动行为

当使用客户端路由时，我们可能希望在导航到新路由时滚动到顶部，或者像真实页面重新加载一样保留历史条目的滚动位置。`vue-router`允许您实现这些，甚至更好，允许您完全自定义路线导航上的滚动行为。

**注意：此功能仅在浏览器支持`history.pushState`.**

在创建路由器实例时，您可以提供以下`scrollBehavior`功能：

```js
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return desired position
  }
})
```

该`scrollBehavior`函数接收`to`和`from`路由对象。第三个参数 ，`savedPosition`仅当这是`popstate`导航（由浏览器的后退/前进按钮触发）时才可用。

该函数可以返回一个滚动位置对象。对象可以是以下形式：

- `{ x: number, y: number }`
- `{ selector: string, offset? : { x: number, y: number }}` （偏移量仅在 2.6.0+ 中支持）

如果返回一个虚假值或一个空对象，则不会发生滚动。

例如：

```js
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

这只会使页面滚动到所有路线导航的顶部。

`savedPosition`当使用后退/前进按钮导航时，返回将导致类似本机的行为：

```js
scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
```

如果要模拟“滚动到锚点”行为：

```js
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
      // , offset: { x: 0, y: 10 }
    }
  }
}
```

##  异步滚动

您还可以返回一个解析为所需位置描述符的 Promise：

```js
scrollBehavior (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
}
```

可以将其与来自页面级转换组件的事件挂钩，以使滚动行为与您的页面转换完美配合，但由于用例中可能存在差异和复杂性，我们仅提供此原语以启用特定的用户空间实现。

## 平滑滚动

您可以为[支持它的浏览器](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior)启用原生平滑滚动，通过简单地将`behavior`选项添加到内部返回的对象`scrollBehavior`：

```js
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
    }
  }
}
```

