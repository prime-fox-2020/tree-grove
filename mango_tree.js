const FruitTree = require('./fruit-tree');
const Mango = require('./mango');

class MangoTree extends FruitTree {
  constructor(age, height, mature, healthStatus) {
    super();
    this._age = age;
    this._height = height;
    this._healthStatus = healthStatus;
    this._maxHeight = 10; //maksimal pertumbuhan pada umur
    this._maxFruit = 60; //jumlah maksimal buah
    this.fruit = Mango;
    this.matureAge = mature; //usia pohon berbuah
    this.increase = 1.3; //maksimal pertumbuhan pertahun (meter)
    this.dead = 24;
  }
}

module.exports = MangoTree;