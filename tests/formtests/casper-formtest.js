casper.test.begin('Basic DOM Tests', 10, function suite(test) {

	casper.start("http://localhost:8080/formtest.html", function() {
		// Test Against the page title
		var pagetitle = this.getTitle();
		test.assertEquals(pagetitle, "Hardcoded Form")

		// 	// Dropdown Tests
		// =========================================
		// Count the different dropdowns
		test.assertEval(function() {
			return __utils__.findAll(".combobox").length == 2;
        }, "There should be two dropdowns");

		// Count the different dropdowns options
		test.assertEval(function() {
			return __utils__.findAll(".combo-option").length == 10;
        }, "There should be 8 dropdowns options in total");

		// // Radio Button Tests
		// // =========================================

		// // Count the radio buttons
		test.assertEval(function() {
			return __utils__.findAll(".btn-radio").length == 3;
        }, "There should be 3 radio buttons"); 

		// // Text Box Tests
		// // =========================================

		// // Count the Text boxes
		test.assertEval(function() {
			return __utils__.findAll(".textbox").length == 2;
        }, "There should be 2 text boxes");

		// Count the required Fields
		test.assertEval(function(){
			return __utils__.findAll(".required").length == 2;
		}, "There should be two required fields");

		// "User" actions
		// =========================================
		
		// Make a selection on the first dropdown
		this.click("#comboBox1");
		this.click("#comboBox1:nth-child(2)");
        test.assertSelectorHasText("#comboBox1", "option1")

		// Make a selection on the second dropdown
		this.click("#comboBox2");
		this.click("#comboBox2:nth-child(2)");
		test.assertSelectorHasText("#comboBox2", "option1")
		// Make a selection on the second radio button
		this.click("#radio2");

		// Fill out the two textboxes
		this.sendKeys("#textbox1", 'some value');
		test.assertSelectorHasText("#textbox1", "some value")
		this.sendKeys("#textbox2", 'some other value');
		test.assertSelectorHasText("#textbox2", "some other value")
		// Click the submit button
		this.click('.btn-submit');


	});

	// End of tests
	casper.run(function() {
        test.done();
    });
});
