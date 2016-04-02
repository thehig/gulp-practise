describe 'my page', ->
  before ->
    casper.start 'http://localhost:3000'
  it 'is reading can be opened by Casper', ->
    casper.then ->
      expect(casper.currentHTTPStatus).to.equal 200
    casper.then ->
      expect('CasperJS Test').to.matchTitle