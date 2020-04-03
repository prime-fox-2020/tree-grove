"use strict"

const random = function() {
  return ~~(Math.random() * 5) + 1
}

// Release 3
class FruitTree {

  constructor (age = 0, height = 0.1, mature, healthStatus = true) {
    this._age = age;
    this._height = height;
    this.matureAge = mature;
    this._healthStatus = healthStatus;
    this._fruits = [];
    this._harvested = '';
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++
    if (this._age <= 12) this._height += ~~(random() * 0.5)
    if (this._age > 17 ) this._healthStatus = false
    return this
  }

  // Produce some fruits
  produceFruits (age = this.matureAge) {
    if (this._age < age) return this // produce fruits after mature at 3
    let num = random() + 5
    for (let i = 0; i < num; i++) {
      let newFruit = new Fruit()
      newFruit.ripe()
      this._fruits.push(newFruit)
    }
    return this
  }

  // Get some fruits
  harvest () {
    this._harvested = ''
    let bucket = {
      good: 0,
      bad: 0
    }
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i] == 'good') bucket.good++
      else bucket.bad++      
    }
    this._harvested += `${bucket.good + bucket.bad} (${bucket.good} good, ${bucket.bad} bad)`
    return this
  }

}

class Fruit {
  // Produce a fruit
  constructor () {
    this.fruit = 'good';
  }

  ripe () {
    let num = random()
    if (random() < num/2) this.fruit = 'bad';
    return this
  }

}


// Mango

class MangoTree extends FruitTree {

  grow () {
    this._age++
    if (this._age <= 12) this._height += ~~(random() * 0.5)
    if (this._age > 17 ) this._healthStatus = false
    return this
  }

  produceMangoes (age = 4) {
    this._fruits = []
    if (this._age < age) return this // produce fruits after mature at 4
    let num = random() + 5    
    for (let i = 0; i < num; i++) {
      let newFruit = new Fruit()
      newFruit.ripe()   
      this._fruits.push(newFruit.fruit)
    }
    return this
  }

}

class Mango extends Fruit {}

module.exports = {
  FruitTree,
  Fruit,
  MangoTree,
  random
};