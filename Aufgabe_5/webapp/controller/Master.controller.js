sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("de.integrata.training.16961.lesson.5.controller.Master", {
        onInit() {
        },

        toCustomerDetail: function(oControlEvent) {
          var oItem = oControlEvent.getParameter("listItem"),
              sItemIndex = oItem.getBindingContextPath().substr(15);
          
          this.getOwnerComponent().getRouter().navTo("Details", {customerId: sItemIndex});
        }
      });
    }
  );
