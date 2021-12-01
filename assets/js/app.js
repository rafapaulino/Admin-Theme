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

        $public.sortableMenu = function() {
            if ($public.elementExists('menu-sortable')) {
                sortable('.menu-sortable', {
                    /*itemSerializer: function (item, container) {
                        console.log(item)
                        //var doc = new DOMParser().parseFromString(item.html, "text/html")
                        //console.log(doc)
                        item.parent = '[parentNode]'
                        item.node = '[Node]'
                        item.html = item.html
                        //item.id = doc.datataset.id
                        return item
                    },
                    containerSerializer: function (container) {
                        container.node = '[Node]'
                        return container
                    }*/
                });
            }
        };

        return $public;
    })();

window.app = app;
app.sortableMenu();


})(window, document);