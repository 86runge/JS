seajs.config({
    // 配置插件
    plugins: ['shim'],

    // 配置别名
    alias: {
        // 配置 jquery 的 shim 配置，这样我们就可以通过 require('jquery') 来获取 jQuery
        'jquery': 'common/jquery.js', //注意，这里是从sea.js所在目录的上两节目录开始查找文件
    }
});