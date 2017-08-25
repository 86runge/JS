// module1.js

define(function() {
    var math = function(x, y) {
        return "你看到了我，那就证明了module1模块调用成功！";
    }
    return {
      math: math
    };
});