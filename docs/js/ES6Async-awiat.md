---
title: ES6的Async-await
date: 2021-7-12
tags:
 - js
---

:::warning

[点击跳转到原文地址](https://blog.csdn.net/zhq2005095/article/details/80636859)

:::

## 1. 概述

async 函数是什么？一句话，它就是 Generator 函数的语法糖。

## 2. 基本用法

### 2.1 返回 promise 对象

**async 函数返回的是一个 `promise` 对象.**

```js
async function test (){
  return 'hello async';
}
let result = test();
console.log(result);
// Promise {<resolved>: "hello async"}
```

所以，async 函数返回的是一个 Promise 对象。从文档中也可以得到这个信息。async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。所以 可以使用 then() 链来处理这个 Promise 对象，就像这样：

```js
test().then(v => {
  console.log(v); // hello async
});
```

### 2.2 Promise 对象的状态变化

`async` 函数返回的 `Promise` 对象，必须等到内部所有 `await` 命令后面的 `Promise` 对象执行完，才会发生状态改变，除非遇到 `return` 语句或者抛出错误。也就是说，只有 `async` 函数内部的异步操作执行完，才会执行 `then` 方法指定的回调函数。

### 2.3 await 命令

正常情况下，`await` 命令后面是一个 `Promise` 对象。如果不是，会被转成一个立即 `resolve` 的 `Promise`对象。

```js
async function f() {
  return await 123;
}

f().then(v => console.log(v))
// 123
```

上面代码中，`await` 命令的参数是数值123，它被转成 `Promise` 对象，并立即 `resolve`。

`await` 命令后面的 `Promise` 对象如果变为 `reject` 状态，则 `reject` 的参数会被 `catch` 方法的回调函数接收到。

```js
async function f() {
  await Promise.reject('出错了');
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
// 出错了
```

注意，上面代码中，await 语句前面没有 return，但是 reject 方法的参数依然传入了 catch 方法的回调函数。这里如果在 await 前面加上 return，效果是一样的。

只要一个 await 语句后面的 Promise 变为 reject，那么整个 async 函数都会中断执行。

```js
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
```

上面代码中，第二个 await 语句是不会执行的，因为第一个 await 语句状态变成了 reject。

有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个 await 放在 try...catch 结构里面，这样不管这个异步操作是否成功，第二个 await 都会执行。

```js
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// hello world
```

如果有多个 `await` 命令，可以统一放在 `try...catch` 结构中。

```js
async function main() {
  try {
    const val1 = await firstStep();
    const val2 = await secondStep(val1);
    const val3 = await thirdStep(val1, val2);

    console.log('Final: ', val3);
  }
  catch (err) {
    console.error(err);
  }
}
```

