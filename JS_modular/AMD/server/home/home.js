// home.js

define(['jquery'], function(jquery) {
    var home = function() {
        $("#info").text("我是home模块！");
    }

    return {
        init: function() {
            home();
        }
    }
})