// import "../../../js/import/slick.min"

$(function() {

    $('.slider-about-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        variableWidth: true,
        speed: 400,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        asNavFor: '.slider-about-bottom'
    });

    $('.slider-about-bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-about-top',
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        variableWidth: true
    });

});