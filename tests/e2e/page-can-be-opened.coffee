expect = chai.expect
chai.use(require('casper-chai'))

describe 'my page (using chai expect)', ->
  before ->
    casper.start 'http://localhost:3000'

  it 'can be opened by Casper', ->
    casper.then -> expect(casper.currentHTTPStatus).to.equal 200

  it 'has title "CasperJS Test"', ->
    casper.then -> expect('CasperJS Test').to.matchTitle

  it 'has the target, inbox and button on screen', ->
  	casper.then ->
  		'.target'.should.be.inDOM.and.not.be.visible
  		'.inbox'.should.be.inDOM.and.be.visible
  		'.action-submit'.should.be.inDOM.and.be.visible

  it "has the output 'Hello casperjs' after input and button click", ->
  	casper.then -> 
  		casper.sendKeys '.inbox', 'casperjs'
  		'.inbox'.should.have.text 'casperjs'
  		casper.click '.action-submit'
  		'.target'.should.have.text 'Hello casperjs'