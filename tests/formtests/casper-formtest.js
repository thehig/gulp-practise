casper.test.begin('Basic DOM Tests', 1, function suite(test) {

	casper.start("http://localhost:8080/formtest.html", function() {
		// Test Against the page title
		var pagetitle = this.getTitle();
		test.assertEquals(pagetitle, "Hardcoded Form")
	});

	// End of tests
	casper.run(function() {
        test.done();
    });
});
// casper.test.begin("Basic DOM Tests", 4, function (test) {
// 	// Test Against the page title
// 	var pagetitle = this.getTitle();
// 	test.assertEquals(pagetitle, "Hardcoded Form")

// 	// Dropdown Tests
// 	// =========================================
// 	// Count the different dropdowns
// 	var dropdowns = document.querySelectorAll(".combobox");
// 	test.assertEquals(dropdowns.length, 2);

// 	// Count the different dropdowns options
// 	var dropdownsOption = document.querySelectorAll(".combobox combo-option");
// 	test.assertEquals(dropdownsOption.length, 8);

// 	// The first dropdown should have the required attribute
// 	test.assertQEquals(dropdowns[0].hasAttribte("required"), true);
// 	// the second dropdown should not have the required attribute
// 	test.assertQEquals(dropdowns[1].hasAttribte("required"), false);

// 	// Radio Button Tests
// 	// =========================================

// 	// Count the radio buttons
// 	var radioButton = document.querySelectorAll(".btn-radio");
// 	test.assertEquals(radioButton.length, 3);
// 	// Check the "checked" attribute for the 3rd radio button
// 	test.assertEquals(radioButton[2].hasAttribte("checked"), true);

// 	// Text Box Tests
// 	// =========================================

// 	// Count the Text boxes
// 	var textbox = document.querySelectorAll(".textbox");
// 	test.assertEquals(textbox.length, 2);
// 	// Check the "required" attribute for the 1st textbox
// 	test.assertEquals(textbox[0].hasAttribte("required"), true);


// 	// Click through tests
// 	//  ========================================
// 	// this.click(.combobox[0])


// });


// // "User" actions
// // =========================================
// casper.then(function(){
// 	// Make a selection on the first dropdown
// 	this.click(dropdowns[0]);
// 	this.click(dropdownsOption[2]);

// 	// Make a selection on the first dropdown
// 	this.click(dropdowns[1]);
// 	this.click(dropdownsOption[3]);

// 	// Make a selection on the second radio button
// 	this.click(radioButton[1]);

// 	// Fill out the two textboxes
// 	this.sendKeys(textbox[0], 'some value');
// 	this.sendKeys(textbox[1], 'some other value');

// 	// Click the submit button
// 	this.click('btn-submit');


// });

// casper.run();