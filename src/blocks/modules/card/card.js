$(function() {



    $('.variables-product a').click(function() {
        $(this).closest('.card-elem').find('.variables-product').find('.active-prod').removeClass('active-prod');
        $(this).addClass('active-prod');
        $(this).closest('.card-elem').find('.card-slider__item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.card-arr-prev').click(function() {
        var i = $(this).parents('.card-product-box').find('.active-elem').children('.card-slider').children('.variables-product').children('.active-prod').index();
        var obj = $(this).parents('.card-product-box').find('.active-elem').children('.card-slider').children('.variables-product').children('a');
        i = (i < 1) ? obj.length - 1 : i - 1;
        act(obj.get(i));
    });

    $('.card-arr-next').click(function() {
        var i = $(this).parents('.card-product-box').find('.active-elem').children('.card-slider').children('.variables-product').children('.active-prod').index();
        var obj = $(this).parents('.card-product-box').find('.active-elem').children('.card-slider').children('.variables-product').children('a');
        i = ++i % obj.length;
        act(obj.get(i));
    });

    function act(Obj) {
        $(Obj).addClass('active-prod').siblings().removeClass('active-prod')
        $('.active-elem').children('.card-slider').children('.card-slider__item').eq($(Obj).index())
            .show().siblings('.card-slider__item').hide();
    };


    $(window).on('load resize', function() {
        var width = $(window).width();

        if (width > '761') {
            $('.card-tabs a').click(function() {
                $('.card-tabs').find('.active').removeClass('active');
                $(this).addClass('active');
                $('.card-product-box').find('.card-elem').hide();
                $('.card-product-box').find('.card-elem').removeClass('active-elem');
                $('#' + $(this).data('switch')).show();
                $('#' + $(this).data('switch')).addClass('active-elem');
                var valid = $(this).attr('data-switch');
                if (valid === 'prod-elem4' || valid === 'prod-elem5' || valid === 'prod-elem6') {
                    $('.card-product-box').addClass('hidden-arrows');
                } else {
                    $('.card-product-box').removeClass('hidden-arrows');
                }
            });
        }

        if (width < '761') {
            $('.card-tabs').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                focusOnSelect: true,
                swipeToSlide: true,
                variableWidth: true
            });

            $('.card-tabs').on('afterChange', function() {
                var activeelem = $('.card-tabs').find('.slick-current');
                var valmob = $('.card-tabs').find('.slick-current').attr('data-switch');
                // console.log(valmob);
                $(this).addClass('active');
                $('.card-product-box').find('.card-elem').hide();
                $('.card-product-box').find('.card-elem').removeClass('active-elem');
                $('#' + valmob).show();
                $('#' + valmob).addClass('active-elem');
                if (valmob === 'prod-elem4' || valmob === 'prod-elem5' || valmob === 'prod-elem6') {
                    $('.card-product-box').addClass('hidden-arrows');
                } else {
                    $('.card-product-box').removeClass('hidden-arrows');
                }
            });




        }

        // if (width < '551') {
        //     $('.variables-product').slick({
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         focusOnSelect: true,
        //         swipeToSlide: true,
        //         variableWidth: true,
        //         prevArrow: $('.card-arr-prev'),
        //         nextArrow: $('.card-arr-next'),
        //     });
        // }
    });


});