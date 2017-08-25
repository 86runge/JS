#CommonJS

1.定义模块

  根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性

2.模块输出：

  模块只有一个出口，module.exports对象，我们需要把模块希望输出的内容放入该对象

3.加载模块：

  加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象

  例子：

    //模块定义 myModel.js

    var name = 'Byron';

    function printName(){
        console.log(name);
    }

    function printFullName(firstName){
        console.log(firstName + name);
    }

    module.exports = {
        printName: printName,
        printFullName: printFullName
    }

    //加载模块

    var nameModule = require('./myModel.js');

    nameModule.printName();

    仔细看上面的代码，会发现require是同步的。模块系统需要同步读取模块文件内容，并编译执行以得到模块接口

4.浏览器加载commonJS

  浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。

    module
    exports
    require
    global

  只要能够提供这四个变量，浏览器就能加载 CommonJS 模块。

5.module对象

  Node内部提供一个Module构建函数。所有模块都是Module的实例。
  每个模块内部，都有一个module对象，代表当前模块。它有以下属性。

  module.id 模块的识别符，通常是带有绝对路径的模块文件名。
  module.filename 模块的文件名，带有绝对路径。
  module.loaded 返回一个布尔值，表示模块是否已经完成加载。
  module.parent 返回一个对象，表示调用该模块的模块。
  module.children 返回一个数组，表示该模块要用到的其他模块。
  module.exports 表示模块对外输出的值。

  为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。
  var exports = module.exports;
  造成的结果是，在对外输出模块接口时，可以向exports对象添加方法。
  exports必须指向module.exports
