const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree {
  constructor(matureAge = 5, age = 0, height = 0, healthStatus = true, maxAge = 15, growthRate = 80, stopGrowingAge = 10, baseFruitsPerYear = 15) {
    super(matureAge, age, height, healthStatus, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear);
    this._name = 'Apple Tree';
    this._product = 'Apple';
  }

  produceFruits() {
    let total = 0;
    if (this.isMature) {
      // Generate mango for this year randomly base on this height, this age and fixed bonus value
      total = this.baseFruitsPerYear + Math.round(Math.random() * (this.height / 100) * (this.age * 5));
      for (let i = 0; i < total; i++) {
        this.fruits.push(new Apple(75 + Math.floor(Math.random() * 20)));
      }
    }
    this.growthStat.push(total);
  }
}

module.exports = AppleTree;