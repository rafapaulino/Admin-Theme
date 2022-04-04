;
(function(window, document) {
    'use strict';

    let carousel = (function () {

        let $public = {};

        $public.init = function() {
            new Glider(document.querySelector('.carousel-glider'), {
                slidesToScroll: 1,
                slidesToShow: 5.5,
                draggable: true,
                dots: '.dots',
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                }
            });
        };

        return $public;
    })();

window.carousel = carousel;
carousel.init();

})(window, document);