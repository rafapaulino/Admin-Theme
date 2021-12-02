;
(function(window, document) {
    'use strict';

    let menuSortableApp = (function () {

        let $public = {};
        let $private = {};

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

            $private.serialize();
        };

        $private.serialize = function () {
            $('.sortable-serialize').on('click',function(e) {
                e.preventDefault();  
                
                let results = [];
                
                let sorted = $('ol.sortable').sortable("serialize", {
                  attribute: 'id'
                });

                let splits = sorted.split('&');

                let index = 0;
                
                Array.from(splits).forEach(function(item) {
                    index++;
                    let parent = $private.getParent(item);
                    let element = $private.getItem(item);
                    
                    let obj = new Object();
                    obj.index = index;
                    obj.element = element;
                    obj.parent = parent;
                    
                    results.push(obj);
                });

                return results;
            });
        };

        $private.getItem = function(item) {
            let result = item.match(/\[(.*?)\]/g);
            
            if (result.length > 0) {
                result = result[0];
                return result.replace(/[^a-z0-9]/gi,'');
            } else {
                return null;
            }
        };

        $private.getParent = function(parent) {
            let result = parent.split('=');
            result = result[result.length -1];

            if (result !== "null")
                return parseInt(result);
            else 
                return null;
        };

        

        return $public;
    })();

window.menuSortableApp = menuSortableApp;
menuSortableApp.init();

})(window, document);