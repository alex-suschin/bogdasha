// import "../../../js/import/slick.min"

$(function() {

    $('.slider-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        accessibility: false,
        asNavFor: '.slider-about-thumbs'

    });

    $('.slider-about-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        accessibility: false,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: '.slider-about'

    });



});