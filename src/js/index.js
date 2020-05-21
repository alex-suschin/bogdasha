import "./import/modules";
import "./import/slick.min";
import "./import/jquery.parallax";
import "./import/jquery.event.frame";
import "./import/viewportchecker";

$(function() {
    jQuery(document).ready(function() {
        jQuery('.header').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInDown',
            offset: 0
        });
        jQuery('.top-decor').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated slideInUp',
            offset: 0
        });

        jQuery('.main-top .title').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInLeft',
            offset: 100
        });

        jQuery('.main-top p').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInRight',
            offset: 100
        });

        jQuery('.main-top a').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInRight',
            offset: 100
        });

        jQuery('.top-img').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInUpBig',
            offset: 100
        });


    });
});