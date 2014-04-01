(function($){
    var defaults = {
        start: null,
        end: null,
        endSucc: null
    };

    $.fn.iDownTime = function(options){
        var $this = $(this);
        var opts = $.extend({},defaults,options);
        var tmptime = opts.end - opts.start;
        var s = null;
        var m = null;
        var h = null;
        var stop = null;

        if(!$this.selector){
            return;
        }

        if(tmptime<=0){
            !!opts.endSucc&&opts.endSucc();
            return;
        }

        function init(){
            s = parseInt(tmptime % 60);
            m = parseInt(tmptime / 60) % 60;
            h = parseInt(tmptime / 3600) % 24;
            $this.html("<em>"+h+"</em>小时<em>"+m + "</em>分钟<em>"+s+"</em>秒");
        };

        function playing(){
            stop = setInterval(function(){
                tmptime--;
                if(tmptime<=1){
                    !!opts.endSucc&&opts.endSucc();
                    clearInterval(stop); 
                } else{
                    init();
                }
                
            },1000);
        };

        init();
        playing();
        return $(this);
    };

})(jQuery);