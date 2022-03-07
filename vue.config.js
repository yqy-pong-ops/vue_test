module.exports = {
    // devServer: {
    //     proxy: 'http://localhost:3000'
    //   }
    devServer: {
        proxy: {
            // 转发请求前缀
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite:{
                    '^/api':'',
                },
                // 用于支持websocket
                ws: true,
                // 代理服务器转发请求时是否向目标服务器声明为同源服务器
                changeOrigin: true
            },
            // '/foo': {
            //     target: '<other_url>'
            // }
        }
    },
    lintOnSave:false,
};
