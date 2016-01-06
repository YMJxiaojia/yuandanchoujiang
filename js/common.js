var iScale = 1;
iScale = iScale / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">');

function resize() {
    var iWidth = document.documentElement.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = iWidth / 1920 * 100 + 'px';
}
resize();
$(function() {
    var num = 0;
    var timer = null;
    var flag = 0;
    timer = setInterval(function() {
        $('.m-box').eq(num).addClass('fadeInRight animated');
        num++;
        if (num > 19) {
            clearInterval(timer);
            $('.m-box').each(function() {
                $(this).removeClass('fadeInRight animated');
                $(this).css('opacity', '1');
            });
        }
    }, 200);
    $('.u-btn').click(function() {
        $('.m-box').css('opacity', '0');
        $('.m-box').each(function() {
            $(this).removeClass('fadeInRight animated f-dn');
        });
        var num = 0;
        timer = setInterval(function() {
            $('.m-box').eq(num).addClass('fadeInRight animated');
            num++;
            if (num > 19) {
                clearInterval(timer);
                $('.m-box').each(function() {
                    $(this).removeClass('fadeInRight animated f-dn');
                    $('.m-box').css('opacity', '1');
                });
            }
        }, 200);
    });
    var num2 = 0;
    //$('.m-box').each(function() {
    $('.m-box').click(function(event) {
        event.stopPropagation();
        var _this = $(this);
        _this.addClass('rise');
        _this.siblings().removeClass('rise');
        $('.rise').click(function() {
            flag++;
            var that = $(this).clone();
            $(this).after(that);
            that.removeClass('rise');
            that.addClass('f-dn');
            that.appendTo('#footer');
            if (flag == 1) {
                $(this).addClass('riseone');
                var _this_ = $(this);
                setTimeout(function() {
                    _this_.appendTo('body');
                    _this_.removeClass('m-box rise riseone');
                    _this_.addClass('riseone');                    
                }, 3000);
                setTimeout(function () {                    
                    _this_.find('.u-front').css('transform', 'rotateY(180deg)');
                    _this_.find('.u-back').css('transform', 'rotateY(0deg)');
                }, 3500);
            } else if (flag == 2) {
                $(this).addClass('risetwo');
                var _this_ = $(this);
                setTimeout(function() {
                    _this_.appendTo('body');
                    _this_.removeClass('m-box rise risetwo');
                    _this_.addClass('risetwo');
                }, 3000);
                setTimeout(function () {                    
                    _this_.find('.u-front').css('transform', 'rotateY(180deg)');
                    _this_.find('.u-back').css('transform', 'rotateY(0deg)');
                }, 3500);
            } else if (flag == 3) {
                $(this).addClass('risethree');
                var _this_ = $(this);
                setTimeout(function() {
                    _this_.appendTo('body');
                    _this_.removeClass('m-box rise risethree');
                    _this_.addClass('risethree');
                }, 3000);
                setTimeout(function () {                    
                    _this_.find('.u-front').css('transform', 'rotateY(180deg)');
                    _this_.find('.u-back').css('transform', 'rotateY(0deg)');
                }, 3500);
            } else if (flag > 3) {
                alert("名额已满");
                return false;
            }
        });
    });
    //});
});
