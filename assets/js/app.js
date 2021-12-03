;
(function(window, document) {
    'use strict';

    let app = (function () {

        let $public = {};

        $public.elementExists = function(className) {
            let myElement = document.getElementsByClassName(className);
            
            if (myElement.length > 0)
            return true;
            else 
            return false;
        };

        return $public;
    })();

window.app = app;


})(window, document);