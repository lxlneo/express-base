var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

// 设置模板引擎
app.engine('.hbs', exphbs({extname: '.hbs',defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// 静态资源
app.use('static',express.static('static'));

app.get('/',function(req,res){
    res.render('index')
})


var server = app.listen(3000,function(){

})
