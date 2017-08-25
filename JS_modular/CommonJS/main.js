// 在node环境中运行

// 引用example模块

// var example = require('./example.js');

// console.log(example.x); // 5
// console.log(example.addX(1)); // 6

// module对象解析
var jquery = require('../common/jquery.js');
exports.$ = jquery;
console.log(module);
