function stepGenerator () {
  return Math.random() < 0.5;
}

function randomWalkFactory (_stepGenerator) {
  if (typeof _stepGenerator === "undefined") {
    _stepGenerator = stepGenerator;
  }
  return function (population) {
    var delta = _stepGenerator() ? 1 : -1
      , newPopulation
      ;

    newPopulation = [
      population[0] + delta,
      population[1] - delta
    ];

    return newPopulation;
  };
}



module.exports = {
  randomWalkFactory: randomWalkFactory,
  stepGenerator: stepGenerator
};