// import "../../../js/import/slick.min"

$(function() {

    $('.slider-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        variableWidth: true,
        speed: 300,
        asNavFor: '.slider-about-thumbs'

    });

    $('.slider-about-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        swipeToSlide: true,
        speed: 300,
        focusOnSelect: true,
        asNavFor: '.slider-about'

    });



});