(function() {
    require.config({
        baseUrl: "../js",
        paths: {
            jquery: "libs/jquery.min",
            underscore: "libs/underscore.min",
            backbone: "libs/backbone.min",
            localstorage: "libs/localStorage"
        },
        shim: {
            underscore: {
                exports: "_"
            },
            backbone: {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            }
        }
    });


    require(["backbone"], function() {
        $(function() {
            Person = Backbone.Model.extend({
                defaults: {
                    name: "zhangsan",
                    age: 0,
                    children: ["defaultsChild"]
                },
                initialize: function() {
                    console.log("hello World");
                    this.bind("change:name", function() {
                        var name = this.get("name");
                        console.log("新名字：" + name);
                    });
                },
                adopt: function(newChildName) {
                    var children_array = this.get("children");
                    children_array.push(newChildName);
                    this.set({
                        children: children_array
                    });
                },
                replaceNameAttr: function(name) {
                    this.set({
                        name: name
                    });
                }
            });

            var person = new Person({
                age: 66
            });

            var age = person.get("age");
            console.log(age);


            person.set("name", "lisi");


            person.adopt("Jim");
            console.log(person.get("children"));



            SearchView = Backbone.View.extend({
                initialize: function() {
                    console.log("abcdef");
                    this.render();
                },
                render: function() {
                    var template = _.template($("#search_template").html());
                    $(this.el).html(template({
                        people: ['moe', 'curly', 'larry'],
                        who: "张三"
                    }));

                },
                events: {
                    "click input[type='button']": "doSearch"
                },
                doSearch: function(e) {
                    console.log("搜索内容：" + $("#search_input").val());
                }
            });

            var search_view = new SearchView({
                el: $("#search_container")
            });
        });
    });
})();