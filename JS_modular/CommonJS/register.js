require.register("./qwer.js", function(module, exports, require) {
    module.exports = function(x) {
        document.write(x * x + 2 * x + 1);
    };
});