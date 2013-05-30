var path = require("path")
  , should = require("should")
  , randomWalkFactory = require(path.resolve(__dirname, "../js/random_walk_factory.js"));

describe('randomWalk', function() {

  beforeEach(function() {
    this.randomWalk = randomWalkFactory.randomWalkFactory();

    this.stepGenerator = (function() {
      var steps = [true, true, false, true]
        , i = 0
        ;

      return function() {
        return steps[i++];
      };
    })();
  });

  it('should be a function', function() {
    this.randomWalk.should.be.a('function');
  });


  describe('when given a population', function() {
    beforeEach(function() {
      this.initialPopulation = [5, 5];
      this.randomWalk = randomWalkFactory.randomWalkFactory(this.stepGenerator);
    });

    it('should return a population of the same size', function() {
      var newPopulation = this.randomWalk(this.initialPopulation);
      newPopulation.length.should.eql(2);
    });

    it('should return a population adjusted as expected', function() {
      var populations = [[6,4], [7,3], [6,4], [7,3]]
        , population = [5,5]
        ;

      for (var i = 0; i < 4; i++){
        population = this.randomWalk(population);
        population.should.eql(populations[i]);
      }
    });
  });

  describe('stepGenerator', function() {
    it('should return a boolean value', function() {
      randomWalkFactory.stepGenerator().should.be.a('boolean');
    });
  });


});