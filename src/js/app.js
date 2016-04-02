(function(global) {
	"use strict";

	var app = {
		foo: function(msg) {
			return "Hello " + msg;
		}
	};

	// Expose to Node
	try{
		module.exports = app;
	} 
	catch(er){
		// no-op
	}


	// Expose to browser
	try{
		global.app = app;
	} 
	catch(er){
		// no-op
	}
})(this);
	