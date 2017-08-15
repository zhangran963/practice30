var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        // main: "./01/js1.js",
        // vendor: "jquery"
        main: "jquery",
        vendor: "./01/js1.js"
    },
    output: {
        path: __dirname + "/01dist",
        filename: '[chunkhash].[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './01dist',  /*文件路径*/
    },
    module: {
        rules: [
            {test: /\.css$/,use:ExtractTextPlugin.extract({use: 'css-loader'})},
            {test: /\.(jpg|png|gif|svg)$/,use: ["file-loader"]},
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["01dist"]),
        new HtmlWebpackPlugin({
            title: "测试html模板",
            template: "./01/index.html"  //在模板的基础上添加js标签
        }),
        new ExtractTextPlugin("styles.css"),  //添加css文件(可以多文件合并);
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']  //添加manifest使vender不会改变;
        })
    ]
};
