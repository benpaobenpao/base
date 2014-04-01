(function($, window, document) {
    var pluginName = "iTooltip",
        defaults = {
            addClass: "",
            dataMess: "",
            posType: "top" //  [left|top|right|bottom]
        };

    function Plugin(element, options) {
        var options = $.extend({}, defaults, options);
        this.opts = options;
        this.$elem = element;
        this.elem = element.selector;
        this.anis = {
            top: "fadeInDown",
            right: "fadeInLeft",
            bottom: "fadeInUp",
            left: "fadeInRight"
        };
        this.tris = {
            top: "iToolTriTop",
            right: "iToolTriRt",
            bottom: "iToolTriBtm",
            left: "iToolTriLt"
        };
        this.isOk = true;
        this.tmpPosType = null;
        this.init();
    };

    Plugin.prototype = {
        init: function() {
            var _this = this;

            $(document).on("mouseover", _this.elem, function() {
                var $this = $(this);
                if (_this.isOk) {
                    _this.isOk = false;
                    _this.setShow($this);
                }
            });

            $(document).on("mouseout", _this.elem, function() {
                if (!_this.isOk) {
                    _this.isOk = true;
                    _this.tmpPosType = _this.opts.posType;
                    $(".iTooltipMes").remove();

                }
            });

        },
        setShow: function(obj) {
            var _this = this;

            var l = obj.offset().left;
            var t = obj.offset().top;
            var w = obj.width();
            var h = obj.height();

            var mess = _this.opts.dataMess || obj.attr("dataMess");

            var tmpHtml = "<div class='iTooltipMes animated'>" + mess + "<i class='iToolTri'><i></i></i></div>";
            $("body").append(tmpHtml);

            var iTooltipMes = $(".iTooltipMes");
            var ow = iTooltipMes.outerWidth();
            var oh = iTooltipMes.outerHeight();

            var tmpt = 0;
            var tmpl = 0;
            var distance = 10;

            var win = $(window);
            var winW = win.width();
            var winH = win.height();
            var winTop = win.scrollTop();

            if (t < (h + distance + winTop) && _this.opts.posType === "top") {
                _this.tmpPosType = "bottom";
            }

            if ((l + w + ow > winW) && _this.opts.posType === "right") {
                _this.tmpPosType = "left";
            }

            if ((l < ow) && _this.opts.posType === "left") {
                _this.tmpPosType = "right";
            }

            if (((t - winH + oh) > winTop) && _this.opts.posType === "bottom") {
                _this.tmpPosType = "top";
            }


            _this.tmpPosType = _this.tmpPosType || _this.opts.posType;

            switch (_this.tmpPosType) {
                case "top":
                    tmpt = t - oh - distance;
                    tmpl = l + ((w - ow) / 2);
                    break;
                case "right":
                    tmpt = t - ((oh - h) / 2);
                    tmpl = l + w + distance;
                    break;
                case "bottom":
                    tmpt = t + h + distance;
                    tmpl = l + ((w - ow) / 2);
                    break;
                case "left":
                    tmpt = t - ((oh - h) / 2);
                    tmpl = l - ow - distance;
                    break;
                default:
                    break;
            }

            if ( !! _this.opts.addClass) {
                iTooltipMes.addClass(_this.opts.addClass);
            }

            iTooltipMes.addClass(_this.anis[_this.tmpPosType]).css({
                left: tmpl + "px",
                top: tmpt + "px"
            }).find(".iToolTri").addClass(_this.tris[_this.tmpPosType]);

        }
    };

    $.fn[pluginName] = function() {
        var args = arguments;

        if (!$(this).selector) {
            return;
        }

        $(this).data("iTooltip", new Plugin(this, args[0]));
    }

})(jQuery, window, document);