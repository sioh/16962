sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("de.integrata.training.16961.lesson.5.controller.Detail", {
        onInit() {
          this.getOwnerComponent().getRouter().getRoute("Details").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent) {
          var sBindingIndex = oEvent.getParameter("arguments").customerId,
              sBindingPath = "/BapiscudatSet/" + sBindingIndex;

          this.getView().bindElement({
            model: "dataModel",
            path: sBindingPath
          });
        }
      });
    }
  );
  