;
(function (window, document, $, undefined) {
    'use strict';

    var formApp = (function () {

        var $private = {};
        var $public = {};
        
        $public.validateMyForms = function() {
            var $form = $('.form-validate');

            var validator = $form.submit(function() {

            }).validate({
                ignore: "",
                errorPlacement: function(label, element) {
                    label.insertAfter(element);
                }
            });
        };
        return $public;
    })();

    // Global
    window.formApp = formApp;
    formApp.validateMyForms();

})(window, document, jQuery);
