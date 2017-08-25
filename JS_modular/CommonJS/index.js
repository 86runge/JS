var module = {
    exports: {}
};

(function(module, exports) {
    exports.multiply = function(n) { return n * 1000 };
}(module, module.exports))

var f = module.exports.multiply;
document.write(f(5)); // 5000

// 上面代码向一个立即执行函数提供 module 和 exports 两个外部变量，
// 模块就放在这个立即执行函数里面。模块的输出值放在 module.exports 之中，这样就实现了模块的加载。
