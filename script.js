$(window).on(`scroll`, function() {
    if($(window). scrollTop()) {
        $("header").removeClass("navbar");
        $("header").addClass("transparan")
    }
    else {
        $("header").addClass("navbar");
        $("header").removeClass("transparan")
    }
})

