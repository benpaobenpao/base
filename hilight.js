var hiLight = {
    init: function() {
        var _this = this;
        var pres = document.getElementsByTagName("pre");
        for (var i = 0, l = pres.length; i < l; i++) {
            var tmp = pres[i].innerHTML;
            var ty = pres[i].getAttribute("data-type");
            if (ty === "javascript") {
                pres[i].innerHTML = _this.js(tmp);
            }
        }
    },
    js: function(s) {
    /*
    一个简单高效的 js 高亮函数

    严格的说，完美的高亮必须要经过语法分析。只有经过语法分析，才能准确区分每个单词（Token）。
    该高亮函数假定 js 代码满足下面 2 个前提：
    1、正则表达式中，开始定界符后面不是 空白 或 等号+空白
    2、除号 / 或 /= 后面是空白
    实际上，js 高亮一般用于代码展示，代码是格式良好的，2 很容易满足，再稍微注意下正则就行了。
    */

        //配色方案
        var colorScheme = {
            comm: '#A8FF60', //注释
            kw: '#96CBFE', //关键字
            id: null, //标识符
            num: null, //数值
            str: '#dd33dd', //字符串
            re: '#800000', //正则表达式
            punc: null, //其他符号
            con: "#ff9900",
            rt: "#dd3300"
        };

        function htmlEncode(s) {
            return s.replace(/[&<>"]/g, function(a) {
                switch (a) {
                    case '&':
                        return '&amp;';
                    case '<':
                        return '&lt;';
                    case '>':
                        return '&gt;';
                    default:
                        return '&quot;';
                }
            });
        }

        var re_con = /console\.\w+\(.*\)/;
        var re_rt = /结果：.*/;
        var re_ws = /\s+/;
        var re_comm = /\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/;
        var re_id = /[a-zA-Z_$][\w$]*/;
        var re_num = /0[Xx][\dA-Fa-f]+|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/;
        var re_str = /"(?:[^"\\]|\\[\s\S])*"|'(?:[^'\\]|\\[\s\S])*'/;
        var re_re = /\/(?!=?\s)(?:[^\r\n*\\/[]|\\[^\r\n]|\[(?:[^\r\n\]\\]|\\[^\r\n])+])(?:[^\r\n\\/[]|\\[^\r\n]|\[(?:[^\r\n\]\\]|\\[^\r\n])+])*\/\w*/;
        //var re_punc = /[^\s\/\w$"']+|\/=?(?=\s)/;
        var re_punc = RegExp("{ } ( ) [ ] \
. ; , < > <= \
>= == != === !== \
+ - * % ++ -- \
<< >> >>> & | ^ \
! ~ && || ? : \
= += -= *= %= <<= \
>>= >>>= &= |= ^=".replace(/[{}[\]().+*|^?]/g, '\\$&').split(' ').sort().reverse().join('|') + '/=?(?=\\s)');
        var re_all = RegExp('(' + re_ws.source + ')' + '|(' + re_con.source + ')' + '|(' + re_rt.source + ')' + '|(' + re_comm.source + ')' + '|(' + re_id.source + ')' + '|(' + re_num.source + ')' + '|(' + re_str.source + ')' + '|(' + re_re.source + ')' + '|(' + re_punc.source + ')' + '|', 'g');

        var kws = " break case catch continue default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with debugger null true false ";

        function isKeyword(s) {
            return kws.indexOf(' ' + s + ' ') != -1;
        }

        function setColor(s, c) {
            return c ? s.fontcolor(c) : s;
        }
        return s.replace(re_all, function(_, ws, con, rt, comm, id, num, str, re, punc) {
            if (ws) return _;
            if (con) return setColor(_, colorScheme.con);
            if (rt) return setColor(_, colorScheme.rt);
            if (id) {
                if (isKeyword(id)) return setColor(_, colorScheme.kw);
                return setColor(_, colorScheme.id);
            }
            if (num) return setColor(_, colorScheme.num);
            _ = htmlEncode(_);
            if (comm) return setColor(_, colorScheme.comm);
            if (str) return setColor(_, colorScheme.str);
            if (re) return setColor(_, colorScheme.re);

            return setColor(_, colorScheme.punc);
        });
    }
};

hiLight.init();