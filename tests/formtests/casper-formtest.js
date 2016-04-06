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

	// The first dropdown should have the required attribute
	test.assertQEquals(dropdownsCount[0].hasAttribte("required"), true);
	// the second dropdown should not have the required attribute
	test.assertQEquals(dropdownsCount[1].hasAttribte("required"), false);

	// Radio Button Tests
	// =========================================

	// Count the radio buttons
	var radioButtonCount = document.querySelectorAll(".btn-radio").length;
	test.assertEquals(radioButtonCount, 3);
	// Check the "checked" attribute for the 3rd radio button
	test.assertEquals(radioButtonCount[2].hasAttribte("checked"), true);

	// Text Box Tests
	// =========================================

	// Count the Text boxes
	var textboxCount = document.querySelectorAll(".textbox").length;
	test.assertEquals(textboxCount, 2);
	// Check the "required" attribute for the 1st textbox
	test.assertEquals(textboxCount[0].hasAttribte("required"), true);

});
casper.run();