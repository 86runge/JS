// module2.js

define(['jquery'], function(jquery) {
    var consoleing = function() {
        $("#note2").html("你看到了我，那就证明了module2模块调用成功！");
    }
    return {
        init: function() {
            consoleing();
        }
    };
});