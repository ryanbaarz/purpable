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
            var originalHeightDimension = 900,
                originalWidthDimension = 1200,
                desiredHeight = 10,
                desiredWidth  =  desiredHeight * (originalWidthDimension/originalHeightDimension),
                radius = 15;

            return {
                height : function(){

                    return desiredHeight;
                },
                radius : function(){
                    console.log(radius);
                    return radius;
                },
                theta : function(){
                    console.log((180/Math.PI)*(desiredWidth/radius));
                    return (180/Math.PI)*(desiredWidth/radius);
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