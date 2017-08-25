// main.js

// 使用require.config()方法，我们可以对模块的加载行为进行自定义。
// require.config()就写在主模块（main.js）的头部。参数就是一个对象，
// 这个对象的paths属性指定各个模块的加载路径。

requirejs.config({
    paths: {
        "jquery": "../common/jquery.min"
    },
    shim: {
        kindeeditor: {
            deps: ['jquery'],
            exports: 'kindeeditor'
        },
        system: {
            deps: ['jquery'],
            exports: 'system'
        }
    }
});

// 另一种则是直接改变基目录（baseUrl）。

// require.config({
//     baseUrl: "../common",
//     paths: {
//         "jquery": "jquery.min",
//         "kindeeditor": "kindeditor",
//         "system": "system",
//     },
//     // 这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。
//     // 具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
//     // （2）deps数组，表明该模块的依赖性。
//     shim: {
//         kindeeditor: {
//             deps: ['jquery'],
//             exports: 'kindeeditor'
//         },
//         system: {
//             deps: ['jquery'],
//             exports: 'system'
//         }
//     }
// });

// 如果某个模块在另一台主机上，也可以直接指定它的网址，比如：

// require.config({
//   paths: {
//     "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
//   }
// });

require(['module/module3'], function(module3) {
    module3.init();
});

require(['module/module2'], function(module2) {
    module2.init();
});

// 按需加载模块
require(['jquery'], function(jquery) {

    require(['module/module1'], function(module1) {
        $("#note1").text(module1.math());
    });

    var module_list = ['server/const/const', 'server/home/home', 'server/nwes/news'];
    $("#btn_box button").on('click', function() {
        var index = $(this).index();
        var module_btn = $(this).attr('id');
        for (var i in module_list) {
            var module = module_list[i].split('/');
            if (module.slice(-1) == module_btn) {
                require([module_list[i]], function(module_btn) {
                    module_btn.init();
                });
            }
        }
    })
})