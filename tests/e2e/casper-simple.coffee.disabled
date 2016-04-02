casper.test.begin 'Localhost is working', 2, (test) ->
  casper.start 'http://localhost:3000/', ->
    test.assertTitle 'CasperJS Test', 'the title is casperJS Test'
    test.assertEvalEquals (->
      __utils__.findOne('.target').innerText
    ), 'Hello Ben', 'the script executed'
  
  casper.run ->
    test.done()
