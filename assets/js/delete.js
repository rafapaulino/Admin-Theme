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
                var $yes = $this.data('yes');
                var $no = $this.data('no');
                var $form = $this.find('form');

                Swal.fire({
                    title: $title,
                    text: $message,
                    showCancelButton: true,
                    confirmButtonText: $yes,
                    cancelButtonText: $no,
                  }).then((result) => {
                    if (result.isConfirmed) {
                        $form.submit();
                    }
                });
                           
            });
        };

        return $public;
    })();

window.deleteApp = deleteApp;
deleteApp.deleteAlert();

})(window, document);