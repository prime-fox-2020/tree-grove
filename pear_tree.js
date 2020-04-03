"use strict"

class FruitTree {
  constructor (age, height, matureAge, healthStatus, maxAge, maxGrow){
    this._age = age
    this._height = height
    this._matureAge = matureAge
    this._healthStatus = healthStatus
    this._maxAge = maxAge
    this._maxGrow = maxGrow
  }

  get age () {return this._age}
  get height () {return this._height}
  get matureAge () {return this._matureAge}
  get healthStatus () {return this._healthStatus}
  get maxAge () {return this._maxAge}
  get maxGrow () {return this._maxGrow}

  grow () {
    if (this._age < 20){
      this._age +=1
      this._height += Math.round(Math.random()*50)
    }
    if (this._age >= 20){
      this._healthStatus = false
    }
    return this
  }
}

class PearTree extends FruitTree{
  constructor(name, age, height, matureAge, healthStatus, maxAge = 10, maxGrow = 7) {
      super(age, height, matureAge, healthStatus, maxAge, maxGrow)
      this.name = name
  }
}

module.exports = PearTree