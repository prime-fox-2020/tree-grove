const FruitTree = require('./fruit-tree');
const Apple = require('./apple');

class AppleTree extends FruitTree {
  constructor(age, height, mature, healthStatus) {
    super();
    this._age = age;
    this._height = height;
    this._healthStatus = healthStatus;
    this._maxHeight = 5; //maksimal pertumbuhan pada umur
    this._maxFruit = 25; //jumlah maksimal buah
    this.fruit = Apple;
    this.matureAge = mature;
    this.increase = 1; //maksimal pertumbuhan pertahun (meter)
    this.dead = 14;
  }
}

module.exports = AppleTree;