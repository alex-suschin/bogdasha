$(function() {

    $(window).on('load resize', function() {
        var width = $(window).width();

        if (width < '476') {

            $(".social-footer").insertAfter($(".footer-top .logo"));
            $(".bottom-menu").insertAfter($(".footer-top"));
        }

        if (width > '475') {

            $(".bottom-menu").insertAfter($(".footer-top .logo"));
            $(".social-footer").insert($(".footer-bottom"));
        }
    });

});