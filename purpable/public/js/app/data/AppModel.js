/*
@author rbaarz
*/
define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function ($, _, Backbone) {
        "use strict";
        return Backbone.Model.extend({
            defaults : {},

            initialize: function (options) {
                console.log("App Model initialized");
            }
        });
    }
);