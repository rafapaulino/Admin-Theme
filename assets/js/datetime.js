;
(function(window, document) {
    'use strict';

    let myDateTime = (function () {

        let $public = {};

        $public.init = function() {

            if (window.app.elementExists('datepicker')) {
                flatpickr('.datepicker');
            }

            if (window.app.elementExists('datetimepicker')) {
                flatpickr('.datetimepicker', {
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                });
            }

            if (window.app.elementExists('datepicker-ptbr')) {
                flatpickr('.datepicker-ptbr', {
                    dateFormat: "d/m/Y",
                });
            }

            if (window.app.elementExists('datetimepicker-ptbr')) {
                flatpickr('.datetimepicker-ptbr', {
                    enableTime: true,
                    dateFormat: "d/m/Y H:i",
                });
            }

            if (window.app.elementExists('daterangepicker')) {
                let daterange = document.getElementsByClassName('daterangepicker');
                
                for (let loop = 0; loop < daterange.length; loop++) {
                    let item = daterange.item(loop)
                   
                    let litepicker = new Litepicker({
                        element: item,
                        singleMode: false
                    });
                }
            }
        };

        return $public;
    })();

window.myDateTime = myDateTime;
myDateTime.init();

})(window, document);