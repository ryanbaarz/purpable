/*
@author rbaarz
*/
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'marionette',
        'modules/Layout/LayoutView'
    ],
    function ($, _, Backbone, Marionette, LayoutView) {
        "use strict";
        
        return Backbone.Marionette.Controller.extend({
            initialize: function (options) {
            },
            defaultStart : function(){
                App.body.show(new LayoutView());
            }
        });
    }
);