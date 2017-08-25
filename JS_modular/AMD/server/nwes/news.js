// news.js

define(['jquery'], function(jquery) {
    var news = function() {
        $("#info").text("我是news模块！");
    }

    return {
        init: function() {
            news();
        }
    }
})