/*
 *@author rbaarz
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'text!modules/Layout/templates/layout_view.html'

], function ($, _, Backbone, Marionette, LayoutTemplate) {
    "use strict";
    return Backbone.Marionette.Layout.extend({
        template: _.template(LayoutTemplate),
        //className: "curated-container",
        regions: {
            /*curatedDialog : ".curated-dialog",*/
        },
        ui :{
            box : "#rybox"
        },
        events : {
            'mouseenter @ui.box' : '_rescale',
        },
        initialize : function(){

        },
        onShow : function(){
            console.log("**********************************");
            
            var box = document.querySelector('a-box');
            console.log(box);
            console.log(this.ui.box);
            console.log(this.ui.box[0]);
            this.ui.box.on("mouseenter", function(){
                console.log("hello");
                box.setAttribute('scale', {
                    x: 4,
                    y: 1,
                    z: 6
                });
            });
            console.log("**********************************");
        },
        _rescale : function(e){
            console.log(e);
            console.log(e.target);
            e.target.setAttribute('scale',{
                x: 4,
                y: 1,
                z: 6
            });
        }

    });
});