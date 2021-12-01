;
(function(window, document) {
    'use strict';

    let menuSortableApp = (function () {

        let $public = {};

        $public.init = function () {
            $(function () {

                $('ol.sortable').nestedSortable({
                    handle: 'div.menu-handle',
                    helper: 'clone',
                    items: 'li',
                    opacity: .6,
                    revert: 250,
                    tabSize: 25,
                    tolerance: 'pointer',
                    toleranceElement: '> div',
                    isTree: true
                });
            });
        };

        return $public;
    })();

window.menuSortableApp = menuSortableApp;
menuSortableApp.init();

})(window, document);