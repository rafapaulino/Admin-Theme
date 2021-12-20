;
(function(window, document) {
    'use strict';

    let chartApp = (function () {

        let $public = {};
        let $private = {};

        $public.pie = function(element, data, options) {
            return $private.create('pie', element, data, options);
        };

        $public.bar = function(element, data, options) {
            return $private.create('bar', element, data, options);
        };

        $public.line = function(element, data, options) {
            return $private.create('line', element, data, options);
        };

        $public.radar = function(element, data, options) {
            return $private.create('radar', element, data, options);
        };

        $private.create = function(type, element, data, options) {
            let canvas = document.getElementById(element);
            let chart = {};

            if (canvas !== null) {
                chart = new Chart(canvas, {
                    type: type,
                    data: data,
                    options: options
                });
            }

            return chart;
        };

        return $public;
    })();

    window.chartApp = chartApp;

})(window, document);