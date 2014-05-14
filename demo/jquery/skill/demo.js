(function($) {
    function skillDown(elem, options, defaults) {
        var options = $.extend({}, defaults, options);
        options.oldVal = "";
        this.opts = options;
        this.elem = elem;
        this.init();
    }
    skillDown.prototype = {
        init: function() {
            var _this = this;
            _this.loadEvents();
            _this.events();
        },
        createHtml: function() {
            var _this = this;
            var html = "<div class='skillDown'>";
            html += "<div class='skillDownHeader'>";
            var hdVal = _this.opts.tarId.attr("value");
            if (!!hdVal) {
                var hdArr = hdVal.split(",");
                for (var i = 0, il = hdArr.length; i < il; i++) {
                    html += "<label><span>" + hdArr[i] + "</span><i>x</i></label>";
                }
            }
            html += "</div>";
            html += "<div class='skillDownErr'></div>";
            html += "<div class='skillDownList'>";
            for (var i = 0, il = this.opts.data.length; i < il; i++) {
                var tmp = this.opts.data[i].categories;
                html += "<div class='skillDownItem clearfix'>";
                html += "<div class='skillDownItemLt'>";
                html += "<span class='skillDownItemTit'>" + this.opts.data[i].name + "</span>";
                if (tmp.length > 3) {
                    html += "<i>&nbsp;</i>";
                }

                html += "</div>";
                html += "<div class='skillDownItemRt'>";
                html += "<ul class='skillDownArr clearfix'>";
                for (var j = 0, jl = tmp.length; j < jl; j++) {
                    if (j > 2) {
                        html += "<li style='display:none;'><span>" + tmp[j] + "</span></li>";
                    } else {
                        html += "<li><span>" + tmp[j] + "</span></li>";
                    }

                }
                html += "</ul></div></div>";
            }
            html+="<div class='skillDownBtns'><input class='skillDownBtnOk' type='button' value='确定'><input class='skillDownBtnCal' type='button' value='取消'></div>";
            html += "</div>";
            if ( !! $(".skillDown").length) {
                $(".skillDown").remove();
            }
            $("body").eq(0).append(html);

            if (!!hdVal) {
                var hdArr = hdVal.split(",");
                $(".skillDownArr span").each(function(k, v) {
                    for (var i = 0, il = hdArr.length; i < il; i++) {
                        if (hdArr[i] === $.trim($(this).text())) {
                            $(this).addClass("on");
                        }
                    }
                });
            }
            _this.elem.css({
                "width": _this.opts.width + "px"
            });
            $(".skillDownArr").css({
                width: (_this.opts.width - 124) + "px"
            });
            _this.opts.oldVal = _this.opts.tarId.attr("value");
        },
        loadEvents: function() {
            var _this = this;
            var val = _this.opts.tarId.attr("value");
            if (val.indexOf(",") !== -1) {
                _this.elem.find(".txt").text(val);
            } else{
                _this.elem.find(".txt").text(_this.opts.btnmess);
            }
        },
        events: function() {
            var _this = this;

            _this.elem.on("click", function() {
                _this.createHtml();
            });

            $(document).on("click", ".skillDownItem", function() {
                var $this = $(this);
                $(".skillDownItem").find("li").hide();
                $(".skillDownItem").find("li:lt(3)").show();
                $(".skillDownItemTit").removeClass("skillDownItemTitOn").parent().find("i").removeClass("on");
                $(".skillDownArr").removeClass("skillDownArrOn");
                $this.find(".skillDownItemLt i").addClass("on");
                $this.find(".skillDownItemTit").addClass("skillDownItemTitOn");
                $this.find(".skillDownArr").addClass("skillDownArrOn").find("li").show();
            });


            $(document).on("click", ".skillDownItemTit", function(e) {
                var $this = $(this);
                if ($this.hasClass("skillDownItemTitOn")) {
                    e = e || window.event;
                    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
                    $(".skillDownItem").find("li").hide();
                    $(".skillDownItem").find("li:lt(3)").show();
                    $(".skillDownItemTit").removeClass("skillDownItemTitOn").parent().find("i").removeClass("on");
                    $(".skillDownArr").removeClass("skillDownArrOn");
                    return false;
                }
            });

            $(document).on("click", ".skillDownArr span", function() {
                if(!$(this).hasClass("on")){
                    if (5 > $(".skillDownHeader").find("label").length) {
                        var txt = $(this).addClass("on").text();
                        if($(".skillDownHeader").find("label").length===0){
                            $(".skillDownHeader").html("");
                        }
                        $(".skillDownHeader").append("<label><span>" + txt + "</span><i>x</i></label>");
                        $(".skillDownErr").html("");
                    } else{
                        $(".skillDownErr").html(_this.opts.errmess);
                    }
                }
            });

            $(document).on("click", ".skillDownHeader label", function() {
                var $this = $(this);
                $(".skillDownErr").html("");
                var val = $.trim($this.find("span").text());
                $this.remove();
                if($(".skillDownHeader").find("label").length===0){
                    $(".skillDownHeader").html(_this.opts.headermess);
                }
                $(".skillDownArr span").each(function(k, v) {
                    if (val === $.trim($(this).text())) {
                        $(this).removeClass("on");
                    }
                });
            });


            $(document).on("click",".skillDownBtnOk",function(){
                var tmpVal = "";
                if(!!$(".skillDownHeader span").length){
                    $(".skillDownHeader span").each(function(k, v) {
                        tmpVal += $.trim($(this).text()) + ",";
                    });
                    tmpVal = tmpVal.substr(0, tmpVal.length - 1);
                    _this.opts.tarId.attr("value", tmpVal);
                    _this.elem.find(".txt").text(tmpVal);
                }else{
                    _this.opts.tarId.attr("value", "");
                    _this.elem.find(".txt").text(_this.opts.btnmess);
                }
                $(".skillDown").remove();
            });

            $(document).on("click",".skillDownBtnCal",function(){
                _this.opts.tarId.attr("value", _this.opts.oldVal);
                _this.elem.find(".txt").text(_this.opts.oldVal);
                $(".skillDown").remove();
            });
        }
    };
    $.fn.skillDown = function(options) {
        var defaults = {
            tarId: null,
            width: 546,
            btnmess: "按钮",
            errmess: "错误提示",
            headermess: "暂无"
        };
        if (!this.selector) {
            return;
        }
        new skillDown(this, options, defaults);
    }
})(jQuery);


var mdata = [{
    name: "办公室应用类",
    categories: ["outlook", "word", "PowerPoint"]

}, {
    name: "程序设计类",
    categories: ["WEB前端", "flash", "HTML5", "JS", "delphi", "JSP", "PHP"]
}, {
    name: "数据库类",
    categories: ["db1", "db2", "db3", "db4"]
}];
$("#test").skillDown({
    data: mdata,
    tarId: $("#mtest"),
    errmess: "超过5个"
});