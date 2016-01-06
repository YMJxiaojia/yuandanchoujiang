var iScale = 1;
iScale = iScale / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">');

function resize() {
    var iWidth = document.documentElement.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = iWidth / 1920 * 100 + 'px';
}
resize();
var localFlag = true;
$(function() {
    var num = 0;
    var timer = null;
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
        if(localFlag){
            $('.m-box').css('opacity', '0');
            $('.m-box').each(function() {
                $(this).removeClass('fadeInRight animated f-dn rise');
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
        }
    });
  });  

(function(){
    var defaults = {
        count:12,
        cls:'rise-2',
        finalcls:'rise-2-final'
    };
    var chouJ = function(options){
        this.opts = $.extend({},defaults,options);
        var self = this.opts;
        var flag = 0;
        $('#footer').delegate('.m-box','click',function(event) {
            event.stopPropagation();
            var _this = $(this);
            _this.addClass('rise');
            _this.siblings().removeClass('rise');
            $('.m-box').off('click');
            _this.click(function() {
                localFlag=false;
                if(flag>=self.count){
                    alert('名额已满');
                    return false;
                }
                var $th = $(this);
                var that = $th.clone();
                var pic = $('.mp-item').eq(flag);
                $th.after(that);
                that.removeClass('rise').addClass('f-dn').appendTo('#footer');
                var _style = {
                    left:pic.offset().left-50,bottom:($(window).height()-pic.offset().top-pic.outerHeight(true)-50)
                }
                $th.addClass(self.cls).animate(_style,1000);

                var _this_ = $(this);
                setTimeout(function() {
                    _this_.appendTo(pic);
                    _this_.removeClass('m-box rise ' + self.cls);
                    _this_.addClass(self.finalcls); 
                    localFlag=true;                   
                }, 1000);
                setTimeout(function () {                    
                    _this_.find('.u-front').css('transform', 'rotateY(180deg)');
                    _this_.find('.u-back').css('transform', 'rotateY(0deg)');
                }, 1500);

                flag++;
            });
        });
    }
    window.chouJ = chouJ;
})();