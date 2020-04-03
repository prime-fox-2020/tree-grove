"use strict"
// const Fruit = require('./fruit');

class FruitTree {
  // Initialize a new FruitTree
  constructor(age = 0, height = 0, matureAge = 0, healthStatus = true, pauseAge = 0, witherAge = 0, fruitClass = Fruit, fruits = [], harvested = '') {
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._healthStatus = healthStatus;
    // this._matureAge = matureAge + 5 + Math.round(Math.random() * 10);
    this._pauseAge = pauseAge + this.matureAge + 5 + Math.round(Math.random() * 15);
    this._witherAge = witherAge + this.pauseAge + 5 + Math.round(Math.random() * 5);
    this._fruitClass = fruitClass;
    this._fruits = fruits;
    this._harvested = harvested;
  }
  get age() {return this._age;}
  set age(param) {this._age = param;}
  get height() {return this._height;}
  set height(param) {this._height = param;}
  get matureAge() {return this._matureAge;}
  set matureAge(param) {this._matureAge = param;}
  get healthStatus() {return this._healthStatus;}
  set healthStatus(param) {this._healthStatus = param;}
  get pauseAge() {return this._pauseAge;}
  set pauseAge(param) {this._pauseAge = param;}
  get witherAge() {return this._witherAge;}
  set witherAge(param) {this._witherAge = param;}
  get fruitClass() {return this._fruitClass;}
  set fruitClass(param) {this._fruitClass = param;}
  get fruits() {return this._fruits;}
  set fruits(param) {this._fruits = param;}
  get harvested() {return this._harvested;}
  set harvested(param) {this._harvested = param;}

  // Grow the tree
  grow() {
    this.fruits = [];
    if (this.healthStatus) {
        if (this.age < this.pauseAge) {
          this.height += Math.random();
          this.height = +this.height.toFixed(1);
        }
    }
  }
  // Produce some fruits
  produceFruits(fruitType = this.fruitClass) {
      if (this.age >= this.matureAge && this.age <= this.pauseAge) {
          const countFruits = (this.age-this.matureAge) + Math.ceil(Math.random() * (2+this.age-this.matureAge));
          for (let i = 0; i < countFruits; i++) {
              const fruit = new fruitType;
              this.fruits.push(fruit);
            }
        }
  }
  // Get some fruits
  harvest() {
      let goodFruits = 0;
      let badFruits = 0;
      for (let fruit of this.fruits) {
        if (fruit.quality == "Good") {
            goodFruits++;
        } else if (fruit.quality == "Bad") {
            badFruits++;
        }
    }
    this.harvested = `${this.fruits.length} (${goodFruits} good, ${badFruits} bad)`;
    
    if (this.healthStatus) {
        this.age += 1;
    }
    if (this.age == this.witherAge) {
      this.healthStatus = false;
    }
  }
}

class Fruit {
    // Produce a fruit
    constructor() {
      this._quality = this.makeFruit();
    }
    get quality() {return this._quality;}
  
    makeFruit(){
      const coin = Math.random();
      if (coin > 0.5){
        return "Good";
      } else {
        return "Bad";
      }
    }
}

module.exports = {FruitTree, Fruit};