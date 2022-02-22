;
(function(window, document) {
    'use strict';

    let audio = (function () {

        let $public = {};

        $public.init = function(className) {
            Array.from(document.querySelectorAll('.audio-player')).map(p => new Plyr(p));
        };

        return $public;
    })();

window.audio = audio;
audio.init();


})(window, document);