/**
 * Created by Administrator on 2016/1/14.
 */
function ajax(json){
    json = json || {};
    if(!json.url) return;
    var XHR = null,
        timer = null,
        url = json.url,
        type = json.type || 'GET',
        async = json.async || true,
        timeout = json.timeout || 5000,
        params = json.data || {};
    if(window.XMLHttpRequest){
        //IE7+ chrome FF Opera Safari
        XHR = new XMLHttpRequest();
    }else{
        //IE5-6
        XHR = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var arr = [];
    for(var x in params) {
        arr.push(x + '=' + params[x]);
    }
    switch (type.toUpperCase()){
        case 'GET':
            XHR.open(type,url+'?'+arr.join('&'),async);
            XHR.send(null);
            break;
        case 'POST':
            XHR.open(type,url,async);
            XHR.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            XHR.send(arr.join('&'));
            break;
        case 'JSONP':
            //TODO 待完成！！！JSONP跨域
            var cbName = json.jsonp || 'callback',
                fnName = 'zQuery'+ Math.random().replace('.','')+new Date().getTime();
            arr.push(cbName+'='+fnName);
            var oS = document.createElement('script');
            oS.src=url+'?'+cbName+'='+fnName+arr.join('&');
            var oHead = document.getElementsByName('head')[0];
            window[fnName] = function (data) {
                json.success && json.success(data);
                oHead.remove(oS);
            }
            return;
            break;

    }

    XHR.onreadystatechange = function () {
        if(XHR.readyState == 4){
            //链接成功，清除定时器
            clearTimeout(timer);
            if(XHR.status >=200 && XHR.status <300 || XHR.status ==304 ){
                if(json.dataType == 'xml'){
                    //判断返回的数据格式
                    json.success && json.success(XHR.responseXML);
                }else{
                    json.success && json.success(XHR.responseText);
                }

            }else{
                json.error && json.error(XHR.status);
            }
        }
    }
    //设置超时
    timer = setTimeout(function () {
        XHR.onreadystatechange = null;
        json.error && json.error('网络超时',XHR.status);
    },timeout);
}
//日历插件
function CalendarDM(){

}
function AddItem(oParent,oSon){
    this.parent = oParent;
    this.son = oSon;
    this.isIn = 0;
    this.init();
    if(!this.isIn){
        this.parent.append(this.son);
    }else{
        alert('已经有相同的事项了');
    }
}
AddItem.prototype.init=function(){
    var _this = this;
    var aSons = _this.parent.find('li');
    aSons.each(function (i,ele) {
        if($(ele).text().trim() == _this.son.text().trim()){
            _this.isIn = 1;
            return false;
        }
    });
}
$(function () {
    $('#addEventBtn').on('click', function () {
        new AddItem($('#eventsList'),$('<li>'+$('#newEvent').val()+'</li>'));
    });
});

//鼠标滚轮事件(兼容性)
function browerType(){
    var str = window.navigator.userAgent.toLowerCase();
    if(str.indexOf('msie')>-1){
        return{
            type:'ie',
            version:str.split('; ')[1].split(' ')[1]
        }
    }
    if(str.indexOf('firefox')>-1){
        return{
            type:'firefox',
            version:str.split(' ')[7].split('/')[1]
        }
    }
    if(str.indexOf('chrome')>-1){
        return{
            type:'chrome',
            version:str.split(' ')[9].split('/')[1]
        }
    }
    return {type:'other'};
}
function mouseWheel(obj,callback){
    if(window.navigator.userAgent.toLowerCase().indexOf('firefox')>-1){
        obj.addEventListener('DOMMouseScroll', function (ev) {
            ev = ev || window.event;
            callback(ev)
        })
    }else{
        obj.onmousewheel = function (ev) {
            ev = ev || window.event;
            callback(ev)
        };
    }
}
