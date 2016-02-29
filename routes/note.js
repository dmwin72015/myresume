/**
 * Created by Administrator on 2016/1/13.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/NotesDao.js');
/* 后台 */

router.get('/', function(req, res, next) {
    //TODO 怎么获取应用的根目录
    var sBaseUrl = req.baseUrl;
    res.sendFile('E:\\myNode\\public' + sBaseUrl + '\\index.html');
});

router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    
    
    res.render('APIdetail', { 
    	title: 'Express', 
    	name: name, 
    	param1:'className',
    	param1_type:'string',

    });
});

module.exports = router;
