/*global QUnit*/

sap.ui.define([
	"deintegratatraining/aufgabe2/controller/XMLSlider.controller"
], function (Controller) {
	"use strict";

	QUnit.module("XMLSlider Controller");

	QUnit.test("I should test the XMLSlider controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
