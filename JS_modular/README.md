# 前端模块化的发展

1.模块

  1.1.函数封装

    function fn1(){
      statement
    }

    function fn2(){
      statement
    }

    这样在需要的以后夹在函数所在文件，调用函数就可以了

    这种做法的缺点很明显：污染了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间没什么关系。

  1.2.对象

    var myModule = {
      var1: 1,

      var2: 2,

      fn1: function(){

      },

      fn2: function(){

      }
    }

    这样我们在希望调用模块的时候引用对应文件，然后

    myModule.fn2();

    这样避免了变量污染，只要保证模块名唯一即可，同时同一模块内的成员也有了关系

    看似不错的解决方案，但是也有缺陷，外部可以随意修改内部成员

    myModel.var1 = 100;

    这样就会产生意外的安全问题

  1.3.立即执行函数

    var myModule = (function(){
      var var1 = 1;
      var var2 = 2;

      function fn1(){
        statement
      }

      function fn2(){
        statement
      }

      return {
        fn1: fn1,
        fn2: fn2
      };
    })();
    
    这样在模块外部无法修改我们没有暴露出来的变量、函数

  1.4.放大模式

    如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）
    　　
      var module1 = (function (mod){
    　　mod.m3 = function () {
    　　　//...
    　　};
    　　return mod;
    　})(module1);  

    上面的代码为module1模块添加了一个新方法m3()，然后返回新的module1模块。

  1.5.宽放大模式（Loose augmentation）

    在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用上一节的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"。

    　var module1 = ( function (mod){
    　　//...
    　　return mod;
    　})(window.module1 || {});

    与"放大模式"相比，＂宽放大模式＂就是"立即执行函数"的参数可以是空对象。

  1.6.输入全局变量

    独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。

    为了在模块内部调用全局变量，必须显式地将其他变量输入模块。

    　　var module1 = (function ($, YAHOO) {
    　　　　//...
    　　})(jQuery, YAHOO);

    上面的module1模块需要使用jQuery库和YUI库，就把这两个库（其实是两个模块）当作参数输入module1。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。