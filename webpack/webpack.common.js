const HtmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');
module.exports={
    entry:{
        index:'./src/page/index/index.js',
        test:'./src/page/test/test.js'
    },
    output:{
        filename: '[name].[hash].js',   //输出名称后面跟哈希值，解决缓存问题
        path: path.resolve(__dirname,'../dist')

    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/page/index/index.html',
            chunks:['index'],
        }),

        new HtmlWebpackPlugin({
            filename:'test.html',
            template:'./src/page/test/test.html',
            chunks:['test'],
        })
    ]
}