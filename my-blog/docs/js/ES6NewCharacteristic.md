---
title: ES6新特性
date: 2021-7-12
tags:
 - js
---

:::warning

[点击跳转到原文地址](https://links.jianshu.com/go?to=https%3A%2F%2Fjuejin.im%2Fpost%2F5ca2e1935188254416288eb2)

:::

## 简介

ES全称ECMAScript，ECMAScript是ECMA制定的标准化脚本语言。目前JavaScript使用的ECMAScript版本为[ECMA-417](https://links.jianshu.com/go?to=https%3A%2F%2Flink.juejin.im%2F%3Ftarget%3Dhttps%3A%2F%2Fecma-international.org%2Fpublications%2Fstandards%2FEcma-417.htm)。关于ECMA的最新资讯可以浏览 [ECMA news](https://links.jianshu.com/go?to=https%3A%2F%2Flink.juejin.im%2F%3Ftarget%3Dhttps%3A%2F%2Fwww.ecma-international.org%2Fnews%2Findex.html)查看。

ECMA规范最终由[TC39](https://links.jianshu.com/go?to=https%3A%2F%2Flink.juejin.im%3Ftarget%3Dhttps%3A%2F%2Fgithub.com%2Ftc39)敲定。TC39由包括浏览器厂商在内的各方组成，他们开会推动JavaScript提案沿着一条严格的发展道路前进。 从提案到入选ECMA规范主要有以下几个阶段：

- Stage 0: strawman——最初想法的提交。
- Stage 1: proposal（提案）——由TC39至少一名成员倡导的正式提案文件，该文件包括API事例。
- Stage 2: draft（草案）——功能规范的初始版本，该版本包含功能规范的两个实验实现。
- Stage 3: candidate（候选）——提案规范通过审查并从厂商那里收集反馈
- Stage 4: finished（完成）——提案准备加入ECMAScript，但是到浏览器或者Nodejs中可能需要更长的时间。

ES6的特性比较多，在 ES5 发布近 6 年（2009-11 至 2015-6）之后才将其标准化。两个发布版本之间时间跨度很大，所以ES6中的特性比较多。 在这里列举几个常用的：

- 类
- 模块化
- 箭头函数
- 函数参数默认值
- 模板字符串
- 解构赋值
- 延展操作符
- 对象属性简写
- Promise
- Let与Const

### 1.类（class）

对熟悉Java，object-c，c#等纯面向对象语言的开发者来说，都会对class有一种特殊的情怀。ES6 引入了class（类），让JavaScript的面向对象编程变得更加简单和易于理解。

```js
class Animal {
    // 构造函数，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
    constructor(name,color) {
      this.name = name;
      this.color = color;
    }
    // toString 是原型对象上的属性
    toString() {
      console.log('name:' + this.name + ',color:' + this.color);

    }
  }

 var animal = new Animal('dog','white');//实例化Animal
 animal.toString();

 console.log(animal.hasOwnProperty('name')); //true
 console.log(animal.hasOwnProperty('toString')); // false
 console.log(animal.__proto__.hasOwnProperty('toString')); // true

 class Cat extends Animal {
  constructor(action) {
    // 子类必须要在constructor中指定super 函数，否则在新建实例的时候会报错.
    // 如果没有置顶consructor,默认带super函数的constructor将会被添加、
    super('cat','white');
    this.action = action;
  }
  toString() {
    console.log(super.toString());
  }
 }

 var cat = new Cat('catch')
 cat.toString();

 // 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
 console.log(cat instanceof Cat); // true
 console.log(cat instanceof Animal); // true
```

### 2.模块化(Module)

ES5不支持原生的模块化，在ES6中模块作为重要的组成部分被添加进来。模块的功能主要由 export 和 import 组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口，通过import来引用其它模块提供的接口。同时还为模块创造了命名空间，防止函数的命名冲突。

**`导出(export)`**

ES6允许在一个模块中使用export来导出多个变量或函数。

导出变量

```js
//test.js
export var name = 'Rainbow'
```

ES6将一个文件视为一个模块，上面的模块通过 export 向外输出了一个变量。一个模块也可以同时往外面输出多个变量。

```js
//test.js
 var name = 'Rainbow';
 var age = '24';
 export {name, age};
```

导出函数

```js
// myModule.js
export function myModule(someArg) {
  return someArg;
}
```

**`导入(import)`**

定义好模块的输出以后就可以在另外一个模块通过import引用。

```js
import {myModule} from 'myModule';// main.js
import {name,age} from 'test';// test.js
```

:::tip

心得: 一条import 语句可以同时导入默认函数和其它变量。import defaultMethod, { otherMethod } from 'xxx.js';

:::

### 3.箭头（Arrow）函数

这是ES6中最令人激动的特性之一。`=>`不只是关键字`function`的简写，它还带来了其它好处。箭头函数与包围它的代码`共享同一个this`,能帮你很好的解决this的指向问题。有经验的JavaScript开发者都熟悉诸如var self = this;或var that = this这种引用外围this的模式。但借助=>，就不需要这种模式了。

**`箭头函数的结构`**

箭头函数的箭头`=>`之前是一个空括号、单个的参数名、或用括号括起的多个参数名，而箭头之后可以是一个表达式（作为函数的返回值），或者是用花括号括起的函数体（需要自行通过`return`来返回值，否则返回的是`undefined`）。

```js
// 箭头函数的例子
()=>1
v=>v+1
(a,b)=>a+b
()=>{
    alert("foo");
}
e=>{
    if (e == 0){
        return 0;
    }
    return 1000/e;
}
```

:::tip

心得：不论是箭头函数还是bind，每次被执行都返回的是一个新的函数引用，因此如果你还需要函数的引用去做一些别的事情（譬如卸载监听器），那么你必须自己保存这个引用。

:::

### 4.函数参数默认值

ES6支持在定义函数的时候为其设置默认值：

```js
function foo(height = 50, color = 'red')
{
    // ...
}
```

不使用默认值：

```js
function foo(height, color)
{
    var height = height || 50;
    var color = color || 'red';
    //...
}
```

这样写一般没问题，但当`参数的布尔值为false`时，就会有问题了。比如，我们这样调用foo函数：

```js
foo(0, "")
```

因为`0的布尔值为false`，这样height的取值将是50。同理color的取值为‘red’。

所以说，`函数参数默认值`不仅能是代码变得更加简洁而且能规避一些问题。

### 5.模板字符串

ES6支持`模板字符串`，使得字符串的拼接更加的简洁、直观。

不使用模板字符串：

```js
var name = 'Your name is ' + first + ' ' + last + '.'
```

使用模板字符串：

```js
var name = `Your name is ${first} ${last}.`
```

在ES6中通过`${}`就可以完成字符串的拼接，只需要将变量放在大括号之中。

### 6.[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

解构赋值语法是JavaScript的一种表达式，可以方便的从数组或者对象中快速提取值赋给定义的变量。

#### 获取数组中的值

从数组中获取值并赋值到变量中，变量的顺序与数组中对象顺序对应。

```js
var foo = ["one", "two", "three", "four"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//如果你要忽略某些值，你可以按照下面的写法获取你想要的值
var [first, , , last] = foo;
console.log(first); // "one"
console.log(last); // "four"

//你也可以这样写
var a, b; //先声明变量

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

如果没有从数组中的获取到值，你可以为变量设置一个默认值。

```js
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

通过解构赋值可以方便的交换两个变量的值。

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

#### 获取对象中的值

```js
const student = {
  name:'Ming',
  age:'18',
  city:'Shanghai'  
};

const {name,age,city} = student;
console.log(name); // "Ming"
console.log(age); // "18"
console.log(city); // "Shanghai"
```

### 7.延展操作符(Spread operator)

`延展操作符...`可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造对象时, 将对象表达式按key-value的方式展开。

#### 语法

函数调用：

```js
myFunction(...iterableObj);
```

数组构造或字符串：

```js
[...iterableObj, '4', ...'hello', 6];
```

构造对象时,进行克隆或者属性拷贝（ECMAScript 2018规范新增特性）:

```js
let objClone = { ...obj };
```

#### 应用场景

在函数调用时使用延展操作符

```js
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

//不使用延展操作符
console.log(sum.apply(null, numbers));

//使用延展操作符
console.log(sum(...numbers));// 6
```

构造数组

没有展开语法的时候，只能组合使用 push，splice，concat 等方法，来将已有数组元素变成新数组的一部分。有了展开语法, 构造新数组会变得更简单、更优雅：

```js
const stuendts = ['Jine','Tom']; 
const persons = ['Tony',... stuendts,'Aaron','Anna'];
conslog.log(persions)// ["Tony", "Jine", "Tom", "Aaron", "Anna"]
```

和参数列表的展开类似, `...` 在构造字数组时, 可以在任意位置多次使用。

数组拷贝

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // 等同于 arr.slice()
arr2.push(4); 
console.log(arr2)//[1, 2, 3, 4]
```

展开语法和 Object.assign() 行为一致, 执行的都是浅拷贝(只遍历一层)。

连接多个数组

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];// 将 arr2 中所有元素附加到 arr1 后面并返回
//等同于
var arr4 = arr1.concat(arr2);
```

#### 在ECMAScript 2018中延展操作符增加了对对象的支持

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }
```

### 8.对象属性简写

在ES6中允许我们在设置一个对象的属性的时候不指定属性名。

不使用ES6

```js
const name='Ming',age='18',city='Shanghai';
   
const student = {
    name:name,
    age:age,
    city:city
};
console.log(student);//{name: "Ming", age: "18", city: "Shanghai"}
```

对象中必须包含属性和值，显得非常冗余。

使用ES6

```js
const name='Ming',age='18',city='Shanghai';
  
const student = {
    name,
    age,
    city
};
console.log(student);//{name: "Ming", age: "18", city: "Shanghai"}
```

对象中直接写变量，非常简洁。

### 9.[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise 是异步编程的一种解决方案，比传统的解决方案callback更加的优雅。它最早由社区提出和实现的，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

不使用ES6

嵌套两个setTimeout回调函数：

```js
setTimeout(function()
{
    console.log('Hello'); // 1秒后输出"Hello"
    setTimeout(function()
    {
        console.log('Hi'); // 2秒后输出"Hi"
    }, 1000);
}, 1000);
```

使用ES6

```js
var waitSecond = new Promise(function(resolve, reject)
{
    setTimeout(resolve, 1000);
});

waitSecond
    .then(function()
    {
      console.log("Hello"); // 1秒后输出"Hello"
      return waitSecond;
    })
    .then(function()
    {
        console.log("Hi"); // 2秒后输出"Hi"
    });
```

上面的的代码使用两个then来进行异步编程串行化，避免了回调地狱：

### 10.支持let与const

在之前JS是没有块级作用域的，const与let填补了这方便的空白，const与let都是块级作用域。

使用var定义的变量为函数级作用域：

```js
{
  var a = 10;
}

console.log(a); // 输出10
```

使用let与const定义的变量为块级作用域：

```js
{
  let a = 10;
}

console.log(a); //-1 or Error“ReferenceError: a is not defined”
```
