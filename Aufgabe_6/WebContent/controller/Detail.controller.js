sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";
 
	return Controller.extend("de.integrata.training.16961.lesson.2.controller.Detail", {
 
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detailsRoute")
				.attachPatternMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched: function(oRouteProperties) {
			var sCustomerId = oRouteProperties.getParameter("arguments").customerId;
			var oView = this.getView();
			
			oView.bindElement({
				model: "daten",
				path: "/FlugkundeSet('" + sCustomerId + "')",
				parameters: {
					expand: "Flugbuchungen" // NavProperty Kunde --> Buchungen!!
				}
			});
		}
	}); 
});