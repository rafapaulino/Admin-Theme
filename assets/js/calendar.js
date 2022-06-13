;
(function(window, document) {
    'use strict';

    let calendarApp = (function () {

        let $private = {};
        let $public = {};

        $public.init = function() {
            /*var calendar = new Calendar('#calendar', {
                defaultView: 'month',
                taskView: true,
                template: {
                  monthDayname: function(dayname) {
                    return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
                  }
                }
            });*/
            /*var $calEl = $('#calendar').tuiCalendar({
                defaultView: 'month',
                taskView: true,
                template: {
                  monthDayname: function(dayname) {
                    return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
                  }
                }
            });*/
            var calendar = new tui.Calendar('#calendar', { 
                defaultView: 'month', 
                taskView: true, 
                template: { 
                    monthDayname: function(dayname) { 
                        return '' + dayname.label + ''; 
                    } 
                }, month: { 
                    workweek: true // show only 5 days except for weekend 
                } 
            }); 
        };

        return $public;
    })();

window.calendarApp = calendarApp;
calendarApp.init();


})(window, document);