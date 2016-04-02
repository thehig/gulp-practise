# chai = require('chai')
# casper_chai = require('casper-chai');
# chai.use(casper_chai);
# expect = chai.expect

describe 'my page', ->
  it 'can be opened by Casper', ->
    casper.open 'http://localhost:3000'
    
    casper.then ->
      expect(casper.currentHTTPStatus).to.equal 200

    casper.then ->
      expect('CasperJS Test').to.matchTitle