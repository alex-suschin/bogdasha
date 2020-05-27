import Parallax from 'parallax-js'
$(function() {

    var scene = document.getElementById('production-main__scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        calibrateX: true,
        calibrateY: true,
        scalarX: 1.5,
        scalarY: 1.5
    });

    var scene = document.getElementById('cooperation-main-decor__scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        calibrateX: true,
        calibrateY: true,
        scalarX: 1.5,
        scalarY: 1.5
    });

});