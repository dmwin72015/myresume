/**
 * Created by Dongmin on 2016/1/13.
 */
var mysql = require('mysql');
var config = require('../config/mysql_config');
var pool = mysql.createPool(config.mysql_dev);
exports.pool = pool;