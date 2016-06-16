/*Here is the start of our Marionette App. This file is required by main.js So, this obect is built and then App.start() is called in main.js which kicks off the process.
@author rbaarz
*/
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'marionette',
        'app/data/AppModel',
        'app/AppController',
        'app/AppRouter',
        'aframe'
    ],
    function ($, _, Backbone, Marionette, AppModel, AppController, AppRouter) {
        "use strict";

        // Change Underscore template delimiters to Mustache.js style
        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g
        };
        if (!window.App) {

            var App = window.App = new Backbone.Marionette.Application();

            App.addRegions({
                body : "body";
            });
            
            App.addInitializer(function(options){
                console.log("App initialized");
                App.model = new AppModel();

                App.appRouter = new AppRouter({
                    controller : new AppController({
                        model : App.model
                    })
                });

                Backbone.history.start();

            });
        }
    }
);