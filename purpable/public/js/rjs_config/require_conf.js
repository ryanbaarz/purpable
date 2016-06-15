/**
This is the config file for builds that are not concatted and minified, to use the debug config you should be able to put the word "debug"
in the query string and get the unminifed unconcated code, even on live. The problem is that this will need to stay in sync with the gulpfile
to be usable.

@author rbaarz

**/

require.config({
    baseUrl : (function () {
		return "../js";
	}()),
    urlArgs: "bust=" +  Math.random(),

	waitSeconds: 300,
    paths: {
        // Core Libraries
        "aframe" : "bower_components/aframe/aframe-v0.2.0",
        "backbone": "bower_components/backbone/backbone",
        "jquery": "bower_components/jQuery/dist/jquery",
        "underscore": "bower_components/lodash/dist/lodash",
        "marionette": "bower_components/marionette/lib/core/amd/backbone.marionette",
        "moment" : "bower_components/moment/moment",

        // Plugins
        "text": "/bower_components/requirejs-text/text"
    },
        // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone']
        },
        'moment' : {
            exports: 'moment'
        }
    }
});

require(
    [
        "App"
    ], 
    function () {
        App.start();
    }
);