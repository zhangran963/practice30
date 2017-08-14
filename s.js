var express = require("express");
var bodyParser = require("body-parser");

var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
// var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("./webpack.config.js");

var app = express();

app.use(express.static(process.cwd()+"/01dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(webpackMiddleware(webpack(config),{
    serverSideRender: true,
}));

app.listen(100);
