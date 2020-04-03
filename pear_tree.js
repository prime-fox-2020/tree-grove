const FruitTree = require('./fruit-tree');
const Pear = require('./pear');

class PearTree extends FruitTree {
  constructor(age, height, mature, healthStatus) {
    super();
    this._age = age;
    this._height = height;
    this._healthStatus = healthStatus;
    this._maxHeight = 9; //maksimal pertumbuhan pada umur
    this._maxFruit = 30; //jumlah maksimal buah
    this.fruit = Pear;
    this.matureAge = mature; //usia pohon berbuah
    this.increase = 2; //maksimal pertumbuhan pertahun (meter)
    this.dead = 21;
  }
}

module.exports = PearTree;