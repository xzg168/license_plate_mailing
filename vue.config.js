module.exports = {
    //publicPath: '/weixin',
    devServer: {
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            ["/wxNotify"]: {
                target: `http://localhost:7500`,
                changeOrigin: true
                // pathRewrite: {
                //     ["^" + "/wxNotify"]: ""
                // }
            }
        },
        disableHostCheck: true,
        port: 8081 //端口
    }
};
