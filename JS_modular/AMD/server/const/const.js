// const.js

define(['jquery'], function(jquery) {
    var const_fn = function() {
        $("#info").text("我是const模块！");
    }

    return {
        init: function() {
            const_fn();
        }
    }
})