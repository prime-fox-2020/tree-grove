const FruitTree = require('./fruit_tree');
const Pear = require('./pear');

class PearTree extends FruitTree {
  constructor(matureAge = 8, age = 0, height = 0, healthStatus = true, maxAge = 25, growthRate = 50, stopGrowingAge = 15, baseFruitsPerYear = 12) {
    super(matureAge, age, height, healthStatus, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear);
    this._name = 'Pear Tree';
    this._product = 'Pear';
  }

  produceFruits() {
    let total = 0;
    if (this.isMature) {
      // Generate mango for this year randomly base on this height, this age and fixed bonus value
      total = this.baseFruitsPerYear + Math.round(Math.random() * (this.height / 120) * (this.age * 4));
      for (let i = 0; i < total; i++) {
        this.fruits.push(new Pear(75 + Math.floor(Math.random() * 10)));
      }
    }
    this.growthStat.push(total);
  }
}

module.exports = PearTree;