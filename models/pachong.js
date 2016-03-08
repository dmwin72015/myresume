var fs = require("fs");
var http = require("http");
var https = require("https");
var urlUtil = require("url");
var pathUtil = require("path");
// var url = "https://www.baidu.com/";
// https.get(url, (res) => {
//     res.on('data', (d) => {
//         //读取的内容，object
//         console.log(typeof d);

//     });
// });
var PaChong = {};
var option = {
    hostname: "http://tq.360.cn/",
    path: "",
    filepath:'E:\\myPath\\a.html'
};
var fsPath = 'E:\\myPath\\a.html';

PaChong.getData = function(url, fn) {
    url = url || '';
    if (url) return;
    var req = http.request(option, function(res) {
        res.on("data", function(d) {
            fs.exists(option.filepath, (exists) => {
                if (exists) {
                    fs.appendFile(fsPath, d, 'utf8', (err) => {
                        if (err) throw err;
                        
                    });
                } else {
                    fs.writeFile(fsPath, d, 'utf8', (err) => {
                        if (err) throw err;
                    })
                }
            });
        });
    }).on("error", function(e) {
        console.log(e.message);
    });
    req.end();
};

function writeDate(data, fn) {
    fs.exists('./a.html', (exists) => {
        if (exists) {
            fs.appendFile('./a.html', d, 'utf8', (err) => {
                console.log('ok.......');
            });
        }
    });
}
module.exports = PaChong;
