// 项目主模块

// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    exports.init = function() {
        require.async('jquery', function(jquery) {
            $("#main").text("我是主模块——main模块！");
            $("#btn_div p").on('click', function() {
                var btn_name = $(this).attr('id');
                var module_name = btn_name;
                require.async('./js/' + module_name);
            })
        });
        require.async(['jquery', './index'], function(jquery, index) {
            $("#info").text("index模块调用成功!");
            index.index();
        })
    }
});