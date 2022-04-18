;
(function(window, document) {
    'use strict';

    let starRating = (function () {

        let $public = {};

        $public.init = function() {
            let stars = new StarRating('.star-rating');
            var letStarsPrebuilt = new StarRating('.star-rating-prebuilt', {
                prebuilt: true,
                maxStars: 5,
            });
        };

        return $public;
    })();

window.starRating = starRating;
starRating.init();

})(window, document);