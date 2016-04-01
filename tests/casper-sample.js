var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://localhost:3000', function() {
    this.echo(this.getTitle());

    // this.assertEvalEquals(function() {
    //     return __utils__.findOne('.target').textContent;
    // }, "Hello Ben");

    // this.assertEquals(1 + 1, 2);
});

casper.run();