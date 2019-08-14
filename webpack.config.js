// 核心模块
let path = require('path')
// 引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 配置webpack-自动引入
module.exports = {
    // 入口 - 打包构建文件路径 - 相对路径
    entry: './src/app.js',
    // 输出 - 指定将源文件打包构建到 ? 文件夹 ? 文件名称
    output: {
        path: path.join(__dirname, 'dist'),
        // 指定文件名称
        filename: 'main.js'
    },

    // 配置dev-server
    // devServer: {
    //     // 设置你的托管资源目录,同时提供外部访问,默认会生成一个mian.js
    //     publicPath: '/dist',
    //     open: true
    // },

    // 加载模块loader
    module: {
        // 用什么样式文件就使用什么样式loader解决
        rules: [
            {
                // 以css结尾的文件,使用指定的loader来处理
                // i是不区分大小写
                test: /\.(css|less)$/i,
                // style-loader-将css模块解析处理为浏览器能识别的css代码
                // css-loader-将解析后的css代码添加到页面
                // loader从右到左执行
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // webpack支持图片和图标
            {
                // 图片|png|jpg|gif|
                // 图标|svg|eot|ttf|woff
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit-表示图片大于某个节点byte
                            // 大于就以相对路径启动
                            // 小于就以相对base64格式展示
                            limit: 8000,
                        },
                    },
                ],
            },
        ],
    },

    // 自动引入JS
    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板源文件-相对或者绝对路径
            template: 'index1.html',
            // 指定一个默认的写入的文件
            filename: 'index.html',
            // 指定一个JS文件插入的位置 - body - head 
            inject: 'head'
        })
    ]
}