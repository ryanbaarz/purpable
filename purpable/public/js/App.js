/*Here is the start of our Marionette App. This file is required by main.js So, this obect is built and then App.start() is called in main.js which kicks off the process.
@author rbaarz
*/
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'marionette'
    ],
    function ($, _, Backbone, Marionette) {
        "use strict";

        // Change Underscore template delimiters to Mustache.js style
        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g
        };
        if (!window.App) {

            var App = window.App = new Backbone.Marionette.Application();

            
            App.addInitializer(function(options){
				console.log("App initialized"); 
            });
        }
    }
);