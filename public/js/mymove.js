/**
 *@author dongmin
 *@method move
 *@param Object obj 移动的对象, 
 *@param JSON jTarget 移动到的位置 , 格式 ：{样式名:值}
 *@param JSON jOption 
            可选参数：
            type  运动类型 String ，
            fn  结束后执行的方法  function ，
            time 需要多长时间移动到指定位置,
            interval 时间间隔  number 
 *@return undefined
 ***/

function move(obj, jTarget, jOption) {
    //得到obj的初始样式,然后计算出需要移动的距离。
    //console.log('开始移动....');
    var jStart = {};
    var jDis = {};
    for (var name in jTarget) {
        jStart[name] = parseFloat(getStyle(obj, name));
        jDis[name] = parseFloat(jTarget[name]) - jStart[name];
    }
    //设置默认的可选参数
    jOption = jOption || {};
    var time = jOption.time || 300;
    var type = jOption.type || 'linear';
    var interval = jOption.interval || 30;
    //定义移动的次数,需要移动的总次数
    var count = Math.floor(time / interval);
    var n = 0;
    //清除定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        n++;
        for (var name in jTarget) {
            switch (type) {
                case 'linear':
                    //匀速运动
                    var cur = jStart[name] + n / count * jDis[name];
                    break;
                case 'ease-in':
                    // TODO OK 加速 【s = 1/2 *a *t2 加速度公式】
                    var a = (n / count) * (n / count) * (n / count);
                    // var cur = jStart[name] + (n / count) * (n / count) * jDis[name];
                    var cur = jStart[name] + a * jDis[name];
                    break;
                case 'ease-out':
                    // TODO 未完成 减速
                    var a = 1 - (n / count) * (n / count) * (n / count);
                    // var cur = jStart[name] + n / count * jDis[name];
                    var cur = jStart[name] + (1 - a * a * a) * jDis[name];
                    break;
            }
            if (name == 'opacity') {
                obj.style[name] = cur;
            } else {
                obj.style[name] = cur + 'px';
            }
        }
        if (n == count) {
            clearInterval(obj.timer);
            //运动结束执行的方法
            jOption.fn && jOption.fn();
        }
    }, interval);
    //console.log('结束移动....');
}

//获取当前元素的样式 兼容性写法
function getStyle(obj, sName) {
    return obj.currentStyle ? obj.currentStyle[sName] : getComputedStyle(obj, false)[sName];
}

/**********************************封装在一个对象中 START*****************************************************************/
var Drag = {
    getStyle: function(obj, sName) {
        return obj.currentStyle ? obj.currentStyle[sName] : getComputedStyle(obj, false)[sName];
    },
    move: function(obj, jTarget, jOption) {
        var jStart = {};
        var jDis = {};
        for (var name in jTarget) {
            jStart[name] = parseFloat(getStyle(obj, name));
            jDis[name] = parseFloat(jTarget[name]) - jStart[name];
        }
        jOption = jOption || {};
        var time = jOption.time || 300;
        var type = jOption.type || 'linear';
        var interval = jOption.interval || 30;
        var count = Math.floor(time / interval);
        var n = 0;
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            n++;
            for (var name in jTarget) {
                switch (type) {
                    case 'linear':
                        var cur = start[name] + n / count;
                        break;
                    case 'ease-in':
                        // TODO 未完成 加速
                        var cur = start[name] + n / count;
                        break;
                    case 'ease-out':
                        // TODO 未完成 减速
                        var cur = start[name] + n / count;
                        break;
                }
                if (name == 'opacity') {
                    obj.style[name] = cur;
                } else {
                    obj.style[name] = cur + 'px';
                }
            }
            if (n == count) {
                clearInterval(obj.timer);
                jOption.fn && jOption.fn();
            }
        }, interval);
    }

}

/**********************************封装在一个对象中 END*****************************************************************/

function $ID(id) {
    return document.getElementById(id);
}
/****绑定、解绑事件************/
function addEvent(obj, sEv, fn, f) {
    if (obj.addEventListener) {
        if (f !== true) {
            f = false;
        }
        obj.addEventListener(sEv, fn, false);
    } else {
        obj.attachEvent('on' + sEv, fn);
    }
}

function removeEvent(obj, sEv, fn, f) {
    if (obj.removeEventListener) {
        if (f !== true) {
            f = false;
        }
        obj.removeEventListener(sEv, fn, f);
    } else {
        obj.detachEvent('on' + sEv, fn);
    }
}

/**************************鼠标滚轮事件  添加 移除******************************************************/
// TODO 这样之后怎么解绑？？？
function addWheel(obj, fn, f) {
    if (obj.addEventListener) {
        if (f !== true) {
            f = false;
        }
        obj.addEventListener('DOMMouseScroll', _wheel, f);
    } else {
        obj.onmousewheel = _wheel;
    }

    function _wheel(ev) {
        var oEv = ev || event;
        var down = oEv.detail ? (oEv.detail > 0 ? true : false) : (oEv.wheelDelta > 0 ? false : true);
        fn(down, oEv);
    }
}

function revWheel(obj, fn, f) {
    if (obj.addEventListener) {
        if (f !== true) {
            f = false;
        }
        obj.removeEventListener('DOMMouseScroll', fn, f);
    } else {
        obj.onmousewheel = null;
    }
}

/************鼠标移出、移入事件 考虑在内部移动 *****************/
// TODO 问题：怎么解绑？？？？
function addMouseover(obj, fn) {
    addEvent(obj, 'mouseover', function(ev) {
        var oEv = ev || event;
        var oFrom = oEv.fromElement || oEv.releatedTarget;
        if (oFrom && !obj.contains(oFrom)) {
            fn(oEv);
        }
    });
}

function addMouseout(obj, fn) {
    addEvent(obj, 'mouseout', function(ev) {
        var oEv = ev || event;
        var oTo = oEv.fromElement || oEv.releatedTarget;
        if (oTo && !obj.contains(oTo)) {
            fn(oEv);
        }
    });
}

//获取距离页面的距离
function getPos(obj) {
    var left = 0;
    var top = 0;
    while (obj) {
        left += obj.offsetLeft;
        top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {
        left: left,
        top: top
    };
}
//文档加载完成执行，不包括媒体：图片、视频等等。
function readyAll(fn) {
    if (document.addEventListener) {
        // addEvent(document, 'DOMContentLoaded', fn);
        document.addEventListener('DOMContentLoaded', fn, false);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState == 'complete') {
                fn();
            }
        });
    }
}
//中文转换成Unicode码
function strToUnicode(str, separator) {
    var aUnicode = [];
    for (var i = 0; i < str.length; i++) {
        var num = str.charCodeAt(i);
        aUnicode.push(num.toString(16));
    }
    if (separator) {
        return aUnicode.join(separator);
    } else {
        return aUnicode;
    }
}
/**
 *@method    
 *   name: unicodeToStr;
 *   description: unicode 转换成字符;
 *@param 
 *   name：unicode ;
 *   type: Array;
 *   description:传入一个unicode码的数组;
 *
 **/
function unicodeToStr(unicode) {
    var aStr = [];
    for (var i = 0; i < unicode.length; i++) {
        var str = String.fromCharCode(unicode[i]);
        aStr.push(str);
    };
    return aStr;
}
