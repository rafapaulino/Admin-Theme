;
(function(window, document) {
    'use strict';

    let sidebar = (function () {

        let $public = {};

        $public.init = function() {
            let button = document.getElementById("sidebarCollapse");
            let sidebar = document.getElementsByClassName("sidebar");

            if (button !== null && sidebar !== null) {
                button.onclick = function(e) {
                    e.preventDefault();
                    sidebar[0].classList.toggle("active");
                    button.classList.toggle("active");
                };
            }
        };

        return $public;
    })();

window.sidebar = sidebar;
sidebar.init();

})(window, document);