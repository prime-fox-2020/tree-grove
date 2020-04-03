const FruitTree = require('../treeFruits/fruitTree.js'),
      apple      = require('./apple.js');

class AppleTree extends FruitTree{
  constructor(age, height, matureAge, healthStatus){
    super(age, height, 25, matureAge, 15, healthStatus);
  }
  grow () {
    //check Age
    super.grow();
  }

  // Produce some mangoes
  produceApples () {
    super.produces();
  }

  // Get some fruits
  harvest () {
    super.harvest();
  }
}

module.exports = AppleTree;