;
(function(window, document) {
    'use strict';

    let deleteApp = (function () {

        let $public = {};

        $public.deleteAlert = function () {
            $('body').on('click', '.delete-alert', function(event) {
                event.preventDefault();
                var $this = $(this);
                var $title = $this.data('title');
                var $message = $this.data('message');
                var $url = $this.attr('href');
                
                $.confirm({
                    title: $title,
                    content: $message,
                    buttons: {
                        sim: {
                            text: 'Sim', // With spaces and symbols
                            action: function () {
                                window.location.href = $url;
                            }
                        },
                        nao: {
                            text: 'Não', // With spaces and symbols
                            action: function () {}
                        }
                    }
                });
                           
            });
        };

        return $public;
    })();

window.deleteApp = deleteApp;
deleteApp.deleteAlert();

})(window, document);