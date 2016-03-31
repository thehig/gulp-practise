(function(global) {
	"use strict";

	var app = {
		foo: function(msg) {
			return "Hello " + msg;
		}
	};

	if(global && global.module && global.module.exports)
		global.module.exports = app;
	else
		global.app = app;
})(this);

	