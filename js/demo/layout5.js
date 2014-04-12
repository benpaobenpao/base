$(function(){
    var test = $("#test"),
    testTop = test.offset().top,
    iswitch = true;

    $(document).on("scroll",function(){
        var $this = $(this),
        tmpTop = $(document).scrollTop();

        if(tmpTop>testTop){
            if(iswitch){
                iswitch = false;
                test.addClass("fixHeader");
            }
        } else{
            iswitch = true;
            test.removeClass("fixHeader");
        }
    });
});
