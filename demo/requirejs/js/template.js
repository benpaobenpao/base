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


    require(["backbone", "tempData"], function(Backbone, data) {
        $(function() {
            //console.log(data.data);
            console.log(Backbone);
            ListView = Backbone.View.extend({
                el: $("#list"),
                initialize: function() {
                    this.render();
                },
                events: {
                    "mouseover .item": "doOver",
                    "mouseout .item" : "doOut"
                },
                render: function() {
                    var template = _.template($("#listTemplate").html());
                    $(this.el).html(template(data.data));
                },
                doOver: function(e) {
                    e = e || window.event;
                    $(e.currentTarget).css({background: "#f00"});
                },
                doOut: function(e){
                    $(e.currentTarget).css({background: "none"});
                }
            });
            var listView = new ListView;
        });
    });
})();