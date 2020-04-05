const FruitTree = require('./fruit_tree');
const Mango = require('./mango');

class MangoTree extends FruitTree {
  constructor(matureAge = 3, age = 0, height = 0, healthStatus = true, maxAge = 20, growthRate = 100, stopGrowingAge = 12, baseFruitsPerYear = 10) {
    super(matureAge, age, height, healthStatus, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear);
    this._name = 'Mango Tree';
    this._product = 'Mango';
  }

  produceFruits() {
    let total = 0;
    if (this.isMature) {
      // Generate mango for this year randomly base on this height, this age and fixed bonus value
      total = this.baseFruitsPerYear + Math.round(Math.random() * (this.height / 100) * (this.age * 5));
      for (let i = 0; i < total; i++) {
        this.fruits.push(new Mango(75 + Math.floor(Math.random() * 30)));
      }
    }
    this.growthStat.push(total);
  }
}

module.exports = MangoTree;