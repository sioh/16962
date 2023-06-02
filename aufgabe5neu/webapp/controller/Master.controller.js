sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("de.integrata.training.five.aufgabe5.controller.Master", {
            onInit: function () {

            },
            onCustomerPress: function(oControlEvent) {
                var oItem = oControlEvent.getSource(),
                    sPath = oItem.getBindingContext().getPath(),
                    oModel = this.getView().getModel(),
                    sCustomerId = oModel.getProperty(sPath).Customerid;

                this.getOwnerComponent().getRouter().navTo("RouteDetail", {CustomerId: sCustomerId});
            }
        });
    });
