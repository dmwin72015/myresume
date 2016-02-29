;(function(jQuery){jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});}(jQuery));
;(function ($) {
    $.fn.extend({
        'mousewheel': function (fn) {
            this.each(function (ele,index) {
                var sEvent = isFF() ? 'DOMMouseScroll' : 'mousewheel';
                this.addEventListener(sEvent, function (ev) {
                    var oEv = ev || window.event;
                    var direct = oEv.detail ? (oEv.detail>0 ? !0 :!!0):(oEv.wheelDelta>0 ? !!0 : !0);
                    fn.call(this,direct);
                },false);
            });
        }
    });
    //TODO 图片浏览效果 又是一个坑

    /*页面滚动*/
    function logomove(){
        $('.head-logo').animate({
            'top':'100px',
            'opacity':'1'
        },600,'easeOutBounce', function () {

        });

    };
    logomove();
    var b = true;
    $(document).mousewheel(function (down) {
        if(down){
            if($('.curr').attr('data-page') == 'p2') return;
        }else{
            if($('.curr').attr('data-page') == 'p1') return;
        }
        var h = $('.page').innerHeight();
        //TODO 未完成
        if(!b) return;
        b = !b;
        var dis = down ? -h : h;
        $('.curr').stop().animate({
            top:dis
        },800, function () {
            $(this).removeClass('curr').addClass('next');
        });
        $('.next').css('top',-dis).stop().animate({
            top:'0'
        },800, function () {
            var page = $(this).removeClass('next').addClass('curr').attr('data-page');
            if(page == 'p2'){
                $('.progress-bar.bg-blue').animate({'width':'65%'},200);
                $('.progress-bar.bg-aqua').animate({'width':'55%'},200);
                $('.progress-bar.bg-fuchsia').animate({'width':'85%'},200);
                $('.progress-bar.bg-purple').animate({'width':'10%'},200);
                $('.head-logo').css('top','-130px');
                (function () {
                    var count = 0;
                    var timer = null;
                    var aLi = $('.main-menu>li');
                    clearInterval(timer);
                    timer = setInterval(function () {
                        if(count>aLi.length) clearInterval(timer);
                        aLi.eq(count).animate({
                            'margin-left':'0',
                            'opacity':'1'
                        },300,function () {
                            
                        });
                        count++;
                    },180);
                })();
            }else{
                $('.progress-bar').css('width',0);
                $('.main-menu>li').css({
                    'margin-left':'264px',
                    'opacity':'0'
                });
                logomove();
            }
            b = true;
        });
        $('.page-num span.active').removeClass('active').siblings().addClass('active');
        window.onresize = function () {
            h = $('.page').innerHeight();
        }
    });
    $('.page-num span').click(function(){
        if($(this).hasClass('active')) retrurn;


    });
    //小点显示隐藏
    // $(function(){
    //     var lastTimeLine = new Date().getTime();
    //     var timer = null;
    //     $(document).on('mousemove click', function () {
    //        $('.page-num').animate({'opacity':'1'},280);
    //        clearTimeout(timer);
    //        timer = setTimeout(hidePageNun,3000);
    //     });
    //     function hidePageNun(){
    //        $('.page-num').animate({'opacity':'0'},280);
    //     };
    //     timer = setTimeout(hidePageNun,2000);

    // });
    //公共方法
    function isFF(){
        return window.navigator.userAgent.toLowerCase().indexOf('firefox')>-1 ? !0 : !!0;
    }
    function isIE(){
        return window.navigator.userAgent.toLowerCase().indexOf('msie')>-1 ? !0 : !!0;
    }

    $(function(){
        var aImg = $("#cycleImg img");
        aImg.eq(0).css('opacity','1');
        var timer = null;
        var index = 0;
        timer = setInterval(function(){
            index++;
            index = index>3 ? 0 : index;
            aImg.eq(index%3).animate({
                'opacity':'1'
            },820,function(){
               
            }).siblings().animate({
                'opacity':'0'
            },820,function(){
               
            });
        }, 3000);
        
        var aImg2 = $('.wordbox img');
        for(var i=0;i<aImg2.length;i++){
            if(i<5){
                aImg2.eq(i).css('left',i*66+'px');
            }else{
                aImg2.eq(i).css('left',(i-4)*90+'px'); 
            }
        }
        $('.contentBox').on('mouseover',function(){
            $('#draggerBar').show();
        });

        $('.productItem-wapper').on({
            'mouseenter':function(){
                $(this).find('img').eq(0).stop().animate({
                    top:'-20px'
                },220,function(){

                });
                $(this).find('.product-label').stop().animate({
                    'bottom':0
                },220,'easeOutExpo',function(){

                })
            },
            'mouseleave':function(){
                $(this).find('img').eq(0).stop().animate({
                    top:'0'
                },220,function(){

                });
                $(this).find('.product-label').stop().animate({
                    'bottom':'-40px'
                },220,'easeInQuint',function(){

                })
            }
        })
    });
})(jQuery);
