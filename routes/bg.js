/**
 * Created by Administrator on 2016/1/13.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/UserDao');
/* 后台 */

router.get('/', function(req, res, next) {
    //TODO 怎么获取应用的根目录
    res.sendfile('./public/admin/index.html');
    //res.redirect(304,'./public/admin/index.html')
    //next();
});

router.get('/getUserList',function(req, res, next){
    var user = new User();
    user.findAll(function(f,result){
        if(f){
            console.log(result);
            return;
        }
        res.send(result);
        res.end();
    });
});
router.get('/addEvent',function(req,res,next){

});
router.get('/api:id',function(req,res,next){
    

    
});
module.exports = router;