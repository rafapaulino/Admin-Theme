;
(function (window, document, $, undefined) {
    'use strict';

    var multipleSC = (function () {

        var $private = {};
        var $public = {};

        $public.init = function () {
            $(window).on('load', function() {
                $('.multiple-select-checkbox').each(function() {
                    var $this = $(this);
                    var $search = $this.find('.select-search');
                    var $all = $this.find('.select-all');
                    var $none = $this.find('.select-none');
                    var $primary = $this.find('.select-primary');
                    var $items = $this.find('div > ul > li.select-checkbox');

                    $private.multipleFilter($search, $items);
                    $private.selectAll($all, $items, $primary);
                    $private.selectNone($none, $items, $primary);
                    $private.addPrimary($primary, $items);
                });
            });
        };

        $private.multipleFilter = function($search, $items) {
            $search.on("keyup", function(e) {
                var text = $(this).val();
                $items.hide().filter(function() {
                    var item = $(this).text();
                    var regex = new RegExp(text, "i");
                    return regex.test(item);
                }).closest("li").show();
            });
        };

        $private.selectAll = function($all, $items, $primary) {
            $all.on('click',function(e) {
                e.preventDefault();
                $items.each(function() {
                    var $checkbox = $(this).find('input[type="checkbox"]');
                    $checkbox.prop('checked',true);
                    var $value = $checkbox.val();
                    var $text = $checkbox.data('text');

                    if($private.count($primary, $value) == 0) {
                        $primary.append($('<option>', {
                            value: $value,
                            text: $text
                        }));
                    }
                });
            });
        };

        $private.selectNone = function($none, $items, $primary) {
            $none.on('click',function(e) {
                e.preventDefault();
                $items.each(function() {
                    $(this).find('input[type="checkbox"]').prop('checked',false);
                });
            });
        };

        $private.addPrimary = function($primary, $items) {
            $items.find('input[type="checkbox"]').on('change', function() {
                var $checkbox = $(this);
                var $value = $checkbox.val();
                var $text = $checkbox.data('text');
                
                if($checkbox.is(':checked') && $private.count($primary, $value) == 0) {
                    $primary.append($('<option>', {
                        value: $value,
                        text: $text
                    }));
                } else {
                    var $id = $primary.attr('id');
                    $('#' + $id + ' option').each(function() {
                        if ($(this).val() == $value)
                        $(this).remove();
                    });
                }
            });
        };

        $private.count = function($primary, $value) {
            var $total = 0;
            var $id = $primary.attr('id');
            $('#' + $id + ' option').each(function() {
                if ($(this).val() == $value)
                $total++;
            });
            return $total;
        };

        return $public;
    })();

    // Global
    window.multipleSC = multipleSC;
    multipleSC.init();
    

})(window, document, jQuery);