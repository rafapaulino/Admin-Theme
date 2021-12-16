;
(function(window, document) {
    'use strict';

    let chartApp = (function () {

        let $public = {};
        let $private = {};

        $public.pie = function(element, data, options) {
            console.log(element);
            let pie = document.getElementById(element);
            let chart = {};

            console.log('chegou aqui');
            console.log(pie);

            if (pie !== null) {
                chart = new Chart(pie, {
                    type: 'pie',
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