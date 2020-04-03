const FruitTree = require('../treeFruits/fruitTree.js'),
      pear      = require('./pear.js');

class PearTree extends FruitTree{
  constructor(age, height, matureAge, healthStatus){
    super(age, height, 20, matureAge, 10, healthStatus);
  }
  grow () {
    //check Age
    super.grow();
  }

  // Produce some mangoes
  producePears () {
    super.produces();
  }

  // Get some fruits
  harvest () {
    super.harvest();
  }
}

module.exports = PearTree;