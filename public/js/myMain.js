/**
 * Created by Dong on 2016/1/13.
 */
$(function () {
    var $btn_Login = $('#login');
    var $navbar = $('#navbarTop');
    $btn_Login.on('click', function () {
        $.ajax({
            'url':'/admin/getUserList',
            'type':'GET',
            'success': function (text) {
                var json = text[1];
                if($.isEmptyObject(json)) return;
                $navbar.animate({
                    'top':-50
                },100,function(){
                    $navbar.find('#loginForm').hide().siblings().removeClass('hidden');
                    $navbar.find('#name').html(json.name+'<span class="badge">'+json.age+'</span>');
                    $navbar.find('li:eq(2)>a').html(json.address+'<span class="badge">'+json.age+'</span>');
                    $navbar.animate({
                        'top':0
                    },100);
                });
            },
            'error':function(err){
                alert('密码错误。。。');
            }
        });
    });
});
//日历功能
$(function () {
    $('#color-picker').on('click','li>a' ,function () {
       $('#addEventBtn').css({
           'background-color':$(this).css('background-color'),
           'border-color':$(this).css('border-color'),
           'color':'#fff'
       }).attr({
           'data-color':$(this).attr('class')
       });
    });
    $('#addEventBtn').on('click', function () {
        var v = $('#newEvent').val().trim();
        if(v){
            $('<li class="'+$(this).attr('data-color')+'">'+v+'</li>').prependTo($('#eventsList'));
        }
    });

});

//邮件

$(function () {
    $('.mailbox-controls').on({
        'click': function (ev) {
            var sId = this.id;
            var aItems = $('.mailbox-messages .icheckbox_flat-blue');
            var aItemsChecked = $('.mailbox-messages .icheckbox_flat-blue.checked');
            switch (sId){
                case 'selectAllItem':
                    aItems.length == aItemsChecked.length ? aItems.removeClass('checked') :aItems.addClass(ev.data.sCName);
                    break;
                case 'selectReveItem':
                    aItems.toggleClass(ev.data.sCName);
                    break;
                case 'deleteItem':
                    if(aItemsChecked.length>=1){
                        if(window.confirm('是否删除？')) aItemsChecked.parent().remove();
                        //TODO 像后台发送删除请求
                    }
                    break;
                case 'replayItem':
                    break;
                case 'sendtoItem':
                    break
                case 'refreshItem':
                    break;
            }
        },
    },'#selectAllItem,#selectReveItem,#deleteItem,#replayItem,#sendtoItem,#refreshItem',{'sCName':'checked'});
    $('.mailbox-messages ').on({
        'click': function () {
            $(this).toggleClass('checked');
        }
    },'.icheckbox_flat-blue');
});

//聊天矿口页面
$(function () {
    $('.box-tool').on({
        'click': function (ev) {
            ev.stopPropagation();
            var _this = this;
            var sName = $(this).find('i').attr('class');
            switch (sName){
                case 'fa fa-minus':
                    //TODO 缩小窗口 暂时没想出来
                    $(this).parents('.box.direct-chat').animate({
                        height:41
                        //opacity:0
                    },300, function () {
                        $(_this).find('i').attr('class','fa fa-plus-square');
                    });
                    break;
                case 'fa fa-comments':
                    $(this).parents('.box.direct-chat').toggleClass('chat-contacts-open');
                    break;
                case 'fa fa-times':
                    break;
                case 'fa fa-plus-square':
                    $(this).parents('.box.direct-chat').animate({
                        height:348
                    },300, function () {
                        $(_this).find('i').attr('class','fa fa-minus');
                    });
                    break;
                default:
                    break;
            }
            return false;
        }
    },'.btn',{});
});


$.fn.drag = function (json) {
    json = json || {};
    $(this).each(function () {
        var _this = this;
        _this.move=function (ev){
            var left = ev.pageX-ev.data.disX;
            var top = ev.pageY-ev.data.disY;
            $(_this).css({
                left:left<0?0:left,
                top:top<0?0:top
            });
        };
        _this.up = function (ev){
            $(document).off('mousemove',_this.move);
            $(document).off('mouseup',_this.up)
        };
        _this.sonMove = $(_this).find(json.move || '.box-header');
        _this.sonClose = $(_this).find(json.close || '.fa.fa-times').parent();
        _this.sonShirink = $(_this).find(json.shirink || '.fa.fa-minus').parent();
        _this.sonMove.on('mousedown', function (ev) {
            ev.preventDefault();
            $(this).parent().css({
                'position':'absolute',
                'left':this.parentNode.offsetLeft,
                'top':this.parentNode.offsetTop,
                'width':this.parentNode.offsetWidth-0.5,
                'height':this.parentNode.offsetHeight
            });
            var data = {
                'disX':ev.pageX - _this.offsetLeft,
                'disY':ev.pageY - _this.offsetTop
            };
            $(document).on('mousemove',data,_this.move);
            $(document).on('mouseup',data,_this.up);
        });
        _this.sonShirink.on('click', function () {

        });
    });
}


















