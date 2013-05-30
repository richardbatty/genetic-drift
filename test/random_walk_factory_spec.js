var path = require("path")
  , should = require("should")
  , randomWalkFactory = require(path.resolve(__dirname, "../js/random_walk_factory.js"));

describe('randomWalk', function() {
  beforeEach(function() {
    this.randomWalk = randomWalkFactory.randomWalkFactory();
  });

  it('should be a function', function() {
    this.randomWalk.should.be.a('function');
  });


  describe('when given a population', function() {
    beforeEach(function() {
      this.initialPopulation = [5, 5];
      this.randomWalk = randomWalkFactory.randomWalkFactory(this.initialPopulation);
    });

    it('should return a population of the same size', function() {
      var newPopulation = this.randomWalk(this.initialPopulation);
      newPopulation.length.should.eql(2);
    });
  });
})