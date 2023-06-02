sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("de.integrata.training.five.aufgabe5.controller.Detail", {
        onInit() {
          this.getOwnerComponent().getRouter().getRoute("RouteDetail")
            .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent) {
          var sCustomerId = oEvent.getParameter("arguments").CustomerId,
              oModel = this.getView().getModel(),
              sPath = "/" + oModel.createKey("FlugkundeSet", {Customerid: sCustomerId});

          oModel.metadataLoaded()
            .then(function() {
              this.getView().bindElement(sPath);
            }.bind(this));
        }
      });
    }
  );
  