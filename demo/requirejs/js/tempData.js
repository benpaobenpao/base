define(function() {
    var data = {
        listName: "列表",
        arr: [{
            name: "张三",
            age: "",
            list: [11, 22, 33, 44, 55],
            children: {
                sub1: "张1",
                sub2: "张2"
            }
        }, {
            name: "李四",
            age: 20,
            list: [1, 2, 3, 4, 5],
            children: {
                sub1: "张1",
                sub2: "张2"
            }
        }, {
            name: "王五",
            age: 30,
            list: [1, 2, 3, 4, 5],
            children: {
                sub1: "张1",
                sub2: "张2"
            }
        }]
    };
    return {
        data: data
    };
});