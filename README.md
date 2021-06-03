# 小海的工具箱

一个简单的常用工具函数集，之后会不断扩充（但愿）。[点击这里在线使用](https://hais-teatime.com/hais-utils/)

平日里偶尔遇到一些问题，会用到一些工具函数，作为一名面向 CV 编程的工程师，自然是觉得麻烦，生活中也不方便装X——这就是本项目的由来。这些函数可以简单地在线运行，也可以复制下来在浏览器中直接使用。

## 依赖

使用 Vite + Vue3 + Typescript，主要是想随便玩玩儿康康。

## 本地运行本项目

1. `clone` 本项目到本地
2. `yarn install 或 npm install` 安装依赖
3. `yarn dev`

## 平时怎么用

平时的我们将工具函数按分类放到 `src/lib` 文件夹中，然后运行 `yarn gen`，他会运行 `scripts/generate-function-text.js` 文件，随即生成一个 `src/utils.ts`，里面其实就放了一个数组。整个页面代码就围绕这个数组进行。

为什么不直接搞个数组，而是要从文件中读取？就是玩儿~
