sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/m/routing/Router"
	], function (UIComponent, Router) {
		"use strict";

		return UIComponent.extend("de.integrata.training.16961.lesson.2.Component", {

			metadata : {
				includes : [ 
					"css/styles.css"
				],
				rootView: {
					viewName: "de.integrata.training.16961.lesson.2.view.SplitApp",
					type: "XML"
				},
				routing: {
					config: {
						routerClass: Router,
						viewType: "XML",
						viewPath: "de.integrata.training.16961.lesson.2.view",
						controlId: "idSplitApp",
						controlAggregation: "detailPages",
						transition: "slide",
						async: true,
						clearAggregation: true
					},
					routes: [
						{
							pattern: "",
							name: "main",
							target: [
								"master"
							]					
						},
						{
							pattern: "Kunde/{customerId}",
							name: "detailsRoute",
							target: [
								"master",
								"details"
							]
						},
						{
							pattern: "Neukunde/{dummyId}",
							name: "addCustomerRoute",
							target: [
								"master",
								"newCustomer"
							]
						}
					],
					targets: {
						master: {
							controlAggregation: "masterPages",
							viewName: "Master"
						},
						details: {
							viewName: "Detail",
							controlAggregation: "detailPages",
							clearAggregation: true
						},
						newCustomer: {
							viewName: "AddCustomer",
							controlAggregation: "detailPages"
						}
					}
				}
			},
			
			init : function () {

				UIComponent.prototype.init.apply(this, arguments);
				
				var sRootPath = jQuery.sap.getModulePath("de.integrata.training.16961.lesson.2");
				
				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleUrl: "i18n/i18n.properties"
				});
				
				this.setModel(i18nModel, "i18n");
				
				var oModel = 
					new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZFLIGHT_SH_SRV");
				oModel.setDefaultBindingMode("TwoWay");
				this.setModel(oModel, "daten");

				this.getRouter().initialize();
			}
		});
	}
);