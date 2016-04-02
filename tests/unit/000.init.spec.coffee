app = require('../app/app.js')
expect = require('chai').expect

describe "000.Init", ->
	it "should not be null", -> expect(app).to.not.be.null
	it "should have a foo function", -> expect(app).to.have.property('foo')
	it "should return a message", -> expect(app.foo("david")).to.equal('Hello david')