import Parallax from 'parallax-js'
$(function() {

    var scene = document.getElementById('contacts-box__scene');
    var parallaxInstance7 = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        calibrateX: true,
        calibrateY: true,
        scalarX: 1.5,
        scalarY: 1.5
    });

    $(window).on('load resize scroll', function() {

        var width = $(window).width();

        if (width < '993') {
            parallaxInstance7.destroy();
        }

    });

});