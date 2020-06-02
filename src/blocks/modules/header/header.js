$(function() {

    $('#hamburger-icon').click(function(i) {
        $(this).addClass('active');

        var menuMob = $('wrap-menu');


        if (menuMob.hasClass('active') == false) {
            $('#hamburger-icon').addClass('active');
            $('.wrap-menu').addClass('active');
            $('html').addClass('ov-h');


            var firstClickMenu = true;
            $(document).bind('click.myEventMenu', function(i) {
                if (!firstClickMenu && $(i.target).closest('.wrap-menu').length == 0) {
                    $('#hamburger-icon').removeClass('active');
                    $('.wrap-menu').removeClass('active');
                    $('html').removeClass('ov-h');
                    $(document).unbind('click.myEventMenu');
                }

                firstClickMenu = false;
            });
        }

        i.preventDefault();
    });

    $(window).on('load resize', function() {
        var width = $(window).width();
        if (width > '992') {

            setTimeout(function() {
                $('.wrap-menu').removeClass('top-menu-transition');
            }, 300);
        }


        if (width < '993') {

            setTimeout(function() {
                $('.wrap-menu').addClass('top-menu-transition');
            }, 300);

            // $("<li class='menu-social'></li>").appendTo($(".top-menu"));
            // $(".social-header").appendTo($(".menu-social"));
        }
    });

});