;
(function(window, document) {
    'use strict';

    let video = (function () {

        let $public = {};

        $public.init = function(className) {
            Array.from(document.querySelectorAll('.video-player')).map(p => new Plyr(p));
        };

        return $public;
    })();

window.video = video;
video.init();


})(window, document);