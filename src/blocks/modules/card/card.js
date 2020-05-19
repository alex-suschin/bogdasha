$(function() {

    $('.card-tabs a').click(function() {
        $('.card-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.card-product-box').find('.card-elem').hide();
        $('.card-product-box').find('.card-elem').removeClass('active-elem');
        $('#' + $(this).data('switch')).show();
        $('#' + $(this).data('switch')).addClass('active-elem');
    });

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
        console.log(Obj);
        $(Obj).addClass('active-prod').siblings().removeClass('active-prod')
        $('.active-elem').children('.card-slider').children('.card-slider__item').eq($(Obj).index())
            .show().siblings('.card-slider__item').hide();
    };

});