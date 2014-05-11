(function(){
    require.config({
        baseUrl: "../js",
        paths: {
            jquery: "libs/jquery.min",
            underscore: "libs/underscore.min",
            backbone: "libs/backbone.min",
            localstorage: "libs/localStorage"
        },
        shim: {
            underscore: {exports: "_"},
            backbone: {
                deps: ["underscore","jquery"],
                exports: "Backbone"
            }
        }
    });

    require(["mbase","dotos"],function(mbase,doto){
        mbase.mbase.loadCss("../css/dotos.css");
        $(function(){
            doto.run();
        });
    });
})();