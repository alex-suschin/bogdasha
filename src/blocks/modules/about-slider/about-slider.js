import "../../../js/import/slick.min"
import Parallax from 'parallax-js'

$(function() {

    $('.slider-about-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        variableWidth: true,
        speed: 400,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        asNavFor: '.slider-about-bottom',
        responsive: [{
            breakpoint: 476,
            settings: {
                variableWidth: false
            }
        }]
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

    var scene = document.getElementById('contacts-box__scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        calibrateX: true,
        calibrateY: true,
        scalarX: 1.5,
        scalarY: 1.5
    });

});