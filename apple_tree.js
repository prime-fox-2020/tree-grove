"use strict"

class FruitTree {
  constructor (age, height, matureAge, healthStatus){
    this._age = age
    this._height = height
    this._matureAge = matureAge
    this._healthStatus = healthStatus

  }

  get age () {return this._age}
  get height () {return this._height}
  get matureAge () {return this._matureAge}
  get healthStatus () {return this._healthStatus}


  grow () {
    if (this._age < 15){
      this._age +=1
      this._height += Math.round(Math.random()*50)
    }
    if (this._age >= 15){
      this._healthStatus = false
    }
    return this
  }
}

class AppleTree extends FruitTree{
  constructor(name, age, height, matureAge, healthStatus,) {
      super(age, height, matureAge, healthStatus)
      this.name = name
  }
}

module.exports = AppleTree