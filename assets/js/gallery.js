;
(function(window, document) {
    'use strict';

    let gallery = (function () {

        let $public = {};

        $public.init = function(className) {
            if (window.app.elementExists(className)) {
                
                let lightBox = [];
                let loop = 0;
                let elements = document.getElementsByClassName(className);

                Array.from(elements).forEach(function(gallery) {
                    let id = gallery.getAttribute('id');

                    lightBox[loop] = new SimpleLightbox(`#${id} a`, {});
                    loop++;
                });
            }
        };

        return $public;
    })();

window.gallery = gallery;


})(window, document);