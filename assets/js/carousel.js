;
(function(window, document) {
    'use strict';

    let carousel = (function () {

        let $public = {};

        $public.init = function() {
            document.addEventListener( 'DOMContentLoaded', function() {
                var elms = document.getElementsByClassName( 'splide' );

                for ( var i = 0; i < elms.length; i++ ) {
                    new Splide( elms[ i ], {
                        type   : 'loop',
                        perMove: 1,
                    } ).mount();
                }
            } );
        };

        return $public;
    })();

window.carousel = carousel;
carousel.init();

})(window, document);