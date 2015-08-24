/**
 * Created by neo on 15-8-24.
 */
var client = require('http-api-client');
var debug = require('debug')('http-client');
exports.get = function(url,callback){
    client.request({
        url: url
    }).then(function (response) {
       var statusCode =  response.getStatusCode();
        /*response.getBuffer();
        response.getNativeResonse();*/
        debug("http-client",statusCode);
        //response.getJSON(); //返回是json 对象
        //response.getData(); //返回的是string
        if(statusCode){
            callback(response.getJSON());
        }
    });
}