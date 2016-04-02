describe 'my page (using chai expect)', ->
  before ->
    casper.start 'http://localhost:3000'

  it 'can be opened by Casper', ->
    casper.then ->
      expect(casper.currentHTTPStatus).to.equal 200
      # expect.fail()

  it 'has title "CasperJS Test"', ->
    casper.then ->
      expect('CasperJS Test').to.matchTitle