casper.test.begin('Localhost is working', 2, function suite(test) {
    casper.start("http://localhost:3000/", function() {
        test.assertTitle("CasperJS Test", "the title is casperJS Test");
        test.assertEvalEquals(function(){
            return __utils__.findOne(".target").innerText;
        }, "Hello Ben", "the script executed");
    });

    casper.run(function() {
        test.done();
    });
});