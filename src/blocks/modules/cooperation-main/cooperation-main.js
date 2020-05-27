import Parallax from 'parallax-js'
$(function() {

    var scene = document.getElementById('cooperation-main__scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        calibrateX: true,
        calibrateY: true,
        scalarX: 1.5,
        scalarY: 1.5
    });

    var scene = document.getElementById('cooperation-main-decor__scene');
    var parallaxInstance2 = new Parallax(scene, {
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
            parallaxInstance.destroy();
            parallaxInstance2.destroy();
        }

    });

});