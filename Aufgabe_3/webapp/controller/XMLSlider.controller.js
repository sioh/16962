sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("de.integrata.training.16961.lesson.3.controller.XMLSlider", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    sliderValue: 33,
                    sliders: {
                        value1: 50
                    }
                });
                this.getView().setModel(oModel, "sliderModel");
            },

            onSlideChanged: function(oControlEvent) {
                var oModel = this.getView().getModel("sliderModel"),
                    dSliderValue = oModel.getProperty("/sliderValue");
                alert("You slided " + dSliderValue + "%.");
                oModel.setProperty("/sliderValue", 33);
            }
        });
    });
