sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";
 
	return Controller.extend("de.integrata.training.16961.lesson.2.controller.Master", {
 
		onInit: function () {
			
		},
		
		onCustomerPress: function(oControlEvent) {
			var oListItem    = oControlEvent.getSource();
			var oItemContext = oListItem.getBindingContext("daten");
			var sCustomerId  = oItemContext.getProperty("Customerid");
			var oRouter      = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.navTo("detailsRoute", {
				customerId: sCustomerId
			}, true);
		},
		
		onAddCustomerPress: function(oControlEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oModel = this.getView().getModel("daten");
			var oDummyContext = oModel.createEntry("FlugkundeSet");
			var sDummyPath = oDummyContext.getPath();
			var sDummyId = sDummyPath.substring(sDummyPath.indexOf("'") + 1, 
					sDummyPath.lastIndexOf("'"));
			
			oRouter.navTo("addCustomerRoute", {
				dummyId: sDummyId
			}, true);
		}
	}); 
});