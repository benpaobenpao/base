(function() {
    var iArray = {
        /**
         * [map description]
         * @param  {[type]}   arr      [description]
         * @param  {Function} callback [description]
         * @param  {[type]}   obj      [description]
         * @return {[type]}            [description]
         */
        map: function(arr, callback, obj) {
            var len = arr.length,
                rt = new Array(len);
            for (var i = 0; i < len; i++) {
                if (i in arr) {
                    rt[i] = callback(obj, arr[i], arr);
                }
            }
            return rt;
        },
        /**
         * [forEach description]
         * @param  {[type]}   arr      [description]
         * @param  {Function} callback [description]
         * @param  {[type]}   obj      [description]
         * @return {[type]}            [description]
         */
        forEach: function(arr, callback, obj) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if (i in arr) {
                    callback.call(obj, arr[i], i, arr);
                }
            }
        },
        /**
         * [indexOf description]
         * @param  {[type]} arr   [description]
         * @param  {[type]} obj   [description]
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        indexOf: function(arr, obj, index) {
            var len = arr.length;
            index |= 0;
            if (index < 0) {
                index += len;
            }
            if (index < 0) {
                index = 0;
            }
            for (; index < len; index++) {
                if (index in arr && arr[index] === obj) {
                    return index;
                }
            }
            return -1;
        },
        unique: function(arr) {
            var rt = [],
                obj = {};
            for (var i = 0, len < arr.length; i++) {
                if (!obj[arr[i]]) {
                    obj[arr[i]] = 1;
                    rt.push(arr[i]);
                }
            }
            return rt;
        }
    };

    iBase.iArray = iArray;

})();