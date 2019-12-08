sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";
 
	return Controller.extend("de.integrata.training.16961.lesson.2.controller.AddCustomer", {
 
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("addCustomerRoute")
				.attachPatternMatched(this._onRouteMatched, this);
		},
		
		onNewCustomerCancel: function(oEvent) {
			var oView = this.getView();
			var oModel = this.getView().getModel("daten");
			
			oModel.deleteCreatedEntry(oView.getElementBinding("daten"));
			history.go(-1);
		},
		
		onNewCustomerSave: function(oEvent) {
			var oModel = this.getView().getModel("daten");
			oModel.submitChanges({
				success: function(oData) {
					var sNewCustomerId = oData.__batchResponses[0].__changeResponses[0].data.Customerid;
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("detailsRoute", {
						customerId: sNewCustomerId
					}, true);
				}.bind(this)
			});
		},
		
		_onRouteMatched: function(oRouteProperties) {
			var sDummyCustomerId = oRouteProperties.getParameter("arguments").dummyId;
			var oView = this.getView();
			
			if (sDummyCustomerId) {
				oView.bindElement({
					model: "daten",
					path: "/FlugkundeSet('" + sDummyCustomerId + "')"
				});
			}			
		}
	}); 
});