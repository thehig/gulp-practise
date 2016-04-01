// var casper = require('casper').create();

casper.test.begin('Add 1 + 1 and get 2', 2, function(test) {
	test.assertEquals(1 + 1, 2);    
	test.assertEquals(2+2 , 4);    
	test.done();
});

// casper.thenOpen('http://phantomjs.org', function() {
//     this.echo(this.getTitle());
// });

// casper.thenOpen('http://localhost:3000', function() {
//     this.echo(this.getTitle());

//     // this.assertEvalEquals(function() {
//     //     return __utils__.findOne('.target').textContent;
//     // }, "Hello Ben");

//     // this.assertEquals(1 + 1, 2);
// });

// casper.run();