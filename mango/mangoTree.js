const FruitTree = require('../treeFruits/fruitTree.js'),
      mango      = require('./mango.js');

class MangoTree extends FruitTree{
  constructor(age, height, matureAge, healthStatus){
    super(age, height, 35, matureAge, 20, healthStatus);
  }
  grow () {
    //check Age
    super.grow();
  }

  // Produce some mangoes
  produceMangos () {
    super.produces();
  }

  // Get some fruits
  harvest () {
    super.harvest();
  }
}

module.exports = MangoTree;