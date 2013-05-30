function stepGenerator () {
  return Math.random() < 0.5;
}

function randomWalkFactory () {
  return function (population) {
    return population;
  };
}



module.exports = {
  randomWalkFactory: randomWalkFactory,
  stepGenerator: stepGenerator
};