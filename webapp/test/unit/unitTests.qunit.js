/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pad2/PadTest2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});