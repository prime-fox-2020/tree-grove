"use strict"

class FruitTree {
  // Initialize a new FruitTree
  constructor (age = 0, height = 0, typeOfFruit = '', fruits = [], stopGrowAt = 10, matureAge = 2, deadAt = 15, healthStatus = true, harvested = '') {
    this._age = age
    this._height = height
    this._typeOfFruit = typeOfFruit
    this._fruits = fruits
    this._stopGrowAt = stopGrowAt
    this._matureAge = matureAge
    this._deadAt = deadAt
    this._healthStatus = healthStatus
    this._harvested = harvested
  }

  //setter&getter
  get age(){return this._age}
  set age(p){this._age=p}
  get height(){return this._height}
  set typeOfFruit(p){this._typeOfFruit=p}
  get typeOfFruit(){return this._typeOfFruit}
  set height(p){this._height=p}
  get fruits(){return this._fruits}
  set fruits(p){this._fruits=p}
  get stopGrowAt(){return this._stopGrowAt}
  set stopGrowAt(p){this._stopGrowAt=p}
  get matureAge(){return this._matureAge}
  set matureAge(p){this._matureAge=p}
  get deadAt(){return this._deadAt}
  set deadAt(p){this._deadAt=p}
  get healthStatus(){return this._healthStatus}
  set healthStatus(p){this._healthStatus=p}
  get harvested(){return this._harvested}
  set harvested(p){this._harvested=p}

  // Grow the tree
  grow () {
    if(this.age < this.deadAt){
      this.age++
      if(this.age < this.stopGrowAt){
        let add = Math.round((Math.random() * (2 - 0) + 0) * 10) / 10
        if((add * 10) % 1 !== 0){
          add += 0.000000000001
        }
        this.height += add
      }
    }
  }

  // Produce some fruits
  produceFruits () {
    if(this.age >= this.matureAge){
      const numberOfFruits = Math.floor(Math.random() * (15 - 1)) + 1
      for(let i = 0; i < numberOfFruits; i++){
        const fruit = new Fruit()
        this.fruits.push(fruit)
      }
    }
  }

  // Get some fruits
  harvest () {
    let numberOfGoods = 0
    let numberOfBads = 0

    for(let i = 0; i < this.fruits.length; i++){
      if(this.fruits[i].condition === 1){
        numberOfGoods++
      }else if(this.fruits[i].condition === 0){
        numberOfBads++
      }
    }
    this.harvested = `${numberOfBads + numberOfGoods} (${numberOfGoods} good, ${numberOfBads} bad)`
    this.fruits = [];
    if(this.age === this.deadAt){
      this.healthStatus = false
    }
  }
}


class Fruit {
  constructor (condition = 0) {
    this.condition = condition + Math.round(Math.random())
  }
}

module.exports = {FruitTree, Fruit}