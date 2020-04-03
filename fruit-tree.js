"use strict"

class FruitTree {
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = null) {
    this._age = age
    this._height = height
    this._fruits = fruits
    this._healthStatus = healthStatus
    this._harvested = harvested
  }

  get age () {
    return this._age
  }
  set age (param) {
    this._age = param
  }

  get height () {
    return this._height
  }
  set height (param){
    this._height = param 
  }

  get fruits () {
    return this._fruits
  }
  set fruits (param){
    this._fruits = param
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (param){
  this._healthStatus = param    
  }

  get harvested () {
    return this._harvested
  }
  set harvested (param){
    this._harvested = param
  }  

}


class Fruit {

}

module.exports = FruitTree