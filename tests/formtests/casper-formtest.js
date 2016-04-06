var casper = require('casper').create();

casper.start('./app/formtest.html', function() {
    this.echo(this.getTitle());
});
casper.test.begin("Basic DOM Tests", 4, function (test) {
	// Test Against the page title
	var pagetitle = this.getTitle();
	test.assertEquals(pagetitle, "Hardcoded Form")

	// Dropdown Tests
	// =========================================
	// Count the different dropdowns
	var dropdownsCount = document.querySelectorAll(".combobox").length;
	test.assertEquals(dropdownsCount, 2);

	// Count the different dropdowns options
	var dropdownsOptionCount = document.querySelectorAll(".combobox combo-option").length;
	test.assertEquals(dropdownsOptionCount, 8);

	// Radio Button Tests
	// =========================================

	// Count the radio buttons
	var dropdownOptionCount = document.querySelectorAll(".btn-radio").length;
	test.assertEquals(dropdownOptionCount, 3);

	// Text Box Tests
	// =========================================

	// Count the Text boxes
	var dropdownOptionCount = document.querySelectorAll(".textbox").length;
	test.assertEquals(dropdownOptionCount, 2);

});
casper.run();