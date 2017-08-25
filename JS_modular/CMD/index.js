// index.js

define(function(require, exports, module){
    exports.index = function(){
        require.async('jquery', function() {
            $("#index").text("我是index模块！");
        });
    }
})