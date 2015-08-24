/**
 * Created by neo on 15-8-24.
 */
var hc = require('../common/http-client');
exports.index = function(req,res){
    hc.get("xxxxxx",function(data){
        res.render('index',{
            info:data.data
        })
    })
}
//exports