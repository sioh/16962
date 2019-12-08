sap.ui.controller("de.integrata.training.16961.lesson.2.controller.XMLSlider", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf de.integrata.training.16961.lesson.2.controller.XMLSlider
*/
	onInit: function() {
		var oDaten = {
				sliderValue1: 0,
				sliders: {
					value1: 50,
					value2: 75
				}
		}
		var oModel = new sap.ui.model.json.JSONModel(oDaten);
		//oModel.setDefaultBindingMode("TwoWay");
		this.getView().setModel(oModel, "dataModel");
		
		var i18n = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/i18n.properties"
		});
		sap.ui.getCore().setModel(i18n, "i18n");
		
		var oODataModel = 
			new sap.ui.model.odata.v2.ODataModel("proxy/sap/opu/odata/sap/zflight_01_srv");
		sap.ui.getCore().setModel(oODataModel, "daten");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf de.integrata.training.16961.lesson.2.controller.XMLSlider
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf de.integrata.training.16961.lesson.2.controller.XMLSlider
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf de.integrata.training.16961.lesson.2.controller.XMLSlider
*/
//	onExit: function() {
//
//	}
	
	onSliderChange: function(oControlEvent) {
		var oText = this.getView().byId("idText1");
		
		oText.setText(oControlEvent.getParameter("value"));
		
		/*alert("You slided " + 
			oControlEvent.getParameter("value") +
			"%");*/
	},
	
	demo: function() {
		var oDaten = {
				demo: true,
				demoArray: [
					"Hallo",
					0,
					false,
					{
						arrayObject: "Welt"
					}
					
				]
		}
		
		console.log(oDaten.demo);
		console.log(oDaten.demoArray[3].arrayObject);
	}

});