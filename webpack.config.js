var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        js1: "./01/js1.js",
        js2: "./01/js2.js"
    },
    output: {
        path: __dirname + "/01dist",
        filename: '[name].bundle.js',
    },
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './01dist',  /*文件路径*/
    },
    module: {
        rules: [
            {test: /\.css$/,use:["style-loader","css-loader"]},
            {test: /\.(jpg|png|gif|svg)$/,use: ["file-loader"]},
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["01dist"]),
        new HtmlWebpackPlugin({
            title: "测试html模板",
            template: "./01/index.html"  //在模板的基础上添加js标签
        }),
    ]
};
