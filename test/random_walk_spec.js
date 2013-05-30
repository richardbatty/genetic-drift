var path = require("path")
  , should = require("should")
  , randomWalk = require(path.resolve(__dirname, "../js/random_walk.js"));

describe('randomWalkFactory', function() {
  it('should return a function', function() {
    randomWalk.randomWalkFactory().should.be.a('function');
  })
})