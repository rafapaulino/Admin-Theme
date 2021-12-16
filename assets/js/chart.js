;
(function(window, document) {
    'use strict';

    let chartApp = (function () {

        let $public = {};
        let $private = {};

        $public.pie = function(element, data, options) {
            let pie = document.getElementById(element);
            let chart = {};

            if (pie !== null) {
                chart = new Chart(pie, {
                    type: 'pie',
                    data: data,
                    options: options
                });
            }

            return chart;
        };

        $public.bar = function(element, data, options) {
            let bar = document.getElementById(element);
            let chart = {};

            if (bar !== null) {
                chart = new Chart(bar, {
                    type: 'bar',
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