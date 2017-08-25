// module3.js

define(['jquery'], function(jquery) {
    var consoleing = function() {
        $("#note3").html("你看到了我，那就证明了module3模块调用成功！");
    }
    return {
        init: function() {
            consoleing();
        }
    };
});
