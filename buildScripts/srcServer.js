/*eslint-disable no-console*/

/*var express = require('express');
var path= require('path');
var open=require('open');

var port=3000;
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../src/index.html'));
});
 
app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});
 */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import sassMiddleware from 'node-sass-middleware';

const port = 3000;
const app=express();
const compiler = webpack(config);

 app.use(sassMiddleware({
    src: path.join(__dirname, '../scss'),
    dest: path.join(__dirname,'../public'),
    debug:true,
    indentedSyntax:false,
    outputStyle: 'expanded',
    prefix:  '/public'

}));

app.use(express.static("./"));

 app.use(require('webpack-dev-middleware')(compiler,
    {noInfo:true, publicPath:config.output.publicPath}));

 app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../src/index.html'));
 })

 app.listen(port,err => { 
     err ? console.log(err) : open('http://localhost:' + port) });