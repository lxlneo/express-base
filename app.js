var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

var main = require('./routers/main');
//设置代理服务
//app.set('trust proxy', ['http://123.57.206.149:8082/'])


// 设置模板引擎
app.engine('.hbs', exphbs({extname: '.hbs',defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// 静态资源
app.use('static',express.static('static'));


app.get('/',main.index);


var server = app.listen(3000,function(){

})
