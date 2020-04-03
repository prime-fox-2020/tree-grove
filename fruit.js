"use strict"

// Release 2

class FruitTree {
  constructor(mature, maxHarvest, heightAge, maxAge, maxHeight) {
    this._age = 0;
    this._height = 10;
    this._mature = mature;
    this._fruits = [0, 0];
    this._harvested = 0;
    this._healthStatus = true;
    this._maxHarvest = maxHarvest;
    this._heightAge = heightAge;
    this._maxAge = maxAge;
    this._maxHeight = maxHeight;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get harvested() {
    return this._harvested;
  }

  get mature() {
    return this._mature;
  }

  get maxHarvest() {
    return this._maxHarvest;
  }

  get heightAge() {
    return this._heightAge;
  }

  get maxAge() {
    return this._maxAge;
  }

  get maxHeight() {
    return this._maxHeight;
  }

  set height(value) {
    this._height = value;
  }

  set age(value) {
    this._age = value;
  }

  set healthStatus(value) {
    this._healthStatus = value;
  }

  set harvested(value) {
    this._harvested = value;
  }

  set fruits(value) {
    this._fruits = value;
  }

  grow() {
    if (this.height !== this.maxHeight && this.age < this.heightAge) {
      let value = this.height + Math.round(Math.random() * 100);
      value > this.maxHeight ? value = this.maxHeight : value;
      this.height = value;
    }
    this.age++;
    if (this.age == this.maxAge) this.healthStatus = false;
  }

  // Get some fruits
  harvest() {
    this.harvested = `${this.fruits[0] + this.fruits[1]} (${this.fruits[0]} good, ${this.fruits[1]} bad)`;
  }
}

class Fruit { 
  constructor() {
    this._quality = Math.random() * 5;
  }

  get quality() {
    return this._quality;
  }
}

// Release 0
class MangoTree extends FruitTree {

  produce() {
    if (this.age >= this.mature) {
      let total = Math.round(Math.random() * this.maxHarvest);
      this.fruits = [0, 0];
      for (let i = 0; i < total; i++){
        const qual = new Mango().quality;
        if (qual > 2) this.fruits[0]++;
        else this.fruits[1]++;
      }
    }
  }
}

class Mango extends Fruit{}

// Release 1
class AppleTree extends FruitTree{

  produce() {
    if (this.age >= this.mature) {
      let total = Math.round(Math.random() * this.maxHarvest);
      this.fruits = [0, 0];
      for (let i = 0; i < total; i++){
        const qual = new Apple().quality;
        if (qual > 2) this.fruits[0]++;
        else this.fruits[1]++;
      }
    }
  } 
}

class Apple extends Fruit{}

// Release 3
class PearTree extends FruitTree{
  
  produce() {
    if (this.age >= this.mature) {
      let total = Math.round(Math.random() * this.maxHarvest);
      this.fruits = [0, 0];
      for (let i = 0; i < total; i++){
        const qual = new Pear().quality;
        if (qual > 2) this.fruits[0]++;
        else this.fruits[1]++;
      }
    }
  }
}

class Pear extends Fruit{}

module.exports = {
  MangoTree: MangoTree,
  AppleTree: AppleTree,
  PearTree: PearTree
}