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
        
        templateHelpers : function(){
            var height = 10,
                width  =  1200/900,
                radius = 5;

            return {
                height : function(){
                    return height;
                },
                radius : function(){
                    return radius;
                },
                theta : function(){
                    return (180/Math.PI)*(width/radius);
                }

            }
        },
        //className: "curated-container",
        regions: {
            /*curatedDialog : ".curated-dialog",*/
        },
        ui :{
            box : "#rybox"
        },
        events : {
            'click @ui.box' : '_rescale',
        },
        initialize : function(){

        },
        onShow : function(){
            /*console.log("**********************************");
            this.ui.box[0].addEventListener('mouseenter', this._rescale);
            console.log("**********************************");*/
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