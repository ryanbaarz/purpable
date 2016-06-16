/*
@author rbaarz
*/
define(
    [
        'backbone',
        'marionette'
    ],
    function (Backbone, Marionette) {
        "use strict";

        return Backbone.Marionette.AppRouter.extend({
            appRoutes: {
               '*path': 'defaultStart'
            }
        });
    }
);