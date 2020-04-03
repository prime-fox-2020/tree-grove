'use strict';

const Fruit = require('./fruit.js')

class FruitTree {
  constructor (age, height, maxAge, matureAge, maxAgeHeight, healthStatus) {
    this._age          = age;
    this._matureAge    = matureAge;
    this._mature       =  age >= matureAge ? true : false;
    this._maxAge       = maxAge;
    this._height       = height;
    this._maxHeight    = maxAgeHeight;
    this._fruits       = [];
    this._healthStatus = healthStatus;
    this._harvested    = "";
  }
  


  get matureAge () {
    return this._matureAge;
  }

  get mature () {
    return this._mature;
  }

  get maxAge () {
    return this._maxAge;
  }

  get maxHeight () {
    return this._maxHeight;
  }
  
  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }
  
  set age (val) {
    this._age = val;
  }

  set height (val) {
    this._height = val;
  }

  set fruits(val){
    this._fruits = val;
  }

  set healthStatus(val){
    this._healthStatus = val;
  }

  set harvested (val) {
    this._harvested = val;
  }

  set matureAge (val) {
    this._matureAge = val;
  }

  set mature (val) {
    this._mature = val;
  }

  set maxAge (val) {
    this._maxAge = val;
  }

  set maxHeight (val) {
    this._maxHeight = val;
  }

  
  // Get current states here

  // Grow the tree
  grow () {
    //check Age
    this.age++;
    if(this.age >= this.maxAge) {
      this.healthStatus = false;
      this.age = this.maxAge;
    }
    if(this.age >= this.matureAge) this.mature = true;
    //check Height
    if(this.age <= this.maxHeight) {
      this.height += Math.random();
      this.height = Number(Number(this.height).toFixed(2));
    }

  }

  // Produce some mangoes
  produces () {
    if(this._mature && this.healthStatus){
      const produces = Math.ceil(Math.random() * 10);
      for(let i = 0; i < produces; i++){
        this.fruits.push(new Fruit());
      }
    }
  }

  // Get some fruits
  harvest () {
    const produce = {
      good : 0, bad: 0
    };
    for(let fruit of this.fruits){
      produce[fruit.val]++;
    }
    this.harvested = `${this.fruits.length} (${produce.good} good, ${produce.bad} bad)`;
    this.fruits = [];
  }
}

module.exports = FruitTree;