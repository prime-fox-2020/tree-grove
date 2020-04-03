"use strict"

class FruitTree{
  constructor (name ,age = 0, height = 0, matureAge, healthStatus = true, fruits = [], harvested = 0, limitAge = 19, limitHeight = 5) {
    this._name = name
    this._age = age
    this._height = height
    this._matureAge = matureAge
    this._healthStatus = healthStatus
    this._fruits = fruits
    this._harvested = harvested
    this.limitAge = limitAge
    this.limitHeight = limitHeight
  }

  get name () {
    return this._name
  }

  set name(param){
    this._name = param
  }

  get age () {
    return this._age
  }

  set age(param){
    this._age = param
    return this
  }

  get height () {
    return this._height
  }

  set height(param){
    this._height = param
    return this
  }

  get fruits () {
    return this._fruits
  }

  set fruits(param){
    this._fruits = param
    return this
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus(param){
    this._healthStatus = param
    return this
  }

  get harvested () {
    return this._harvested
  }

  set harvested(param){
    this._harvested = param
    return this
  }

  get matureAge () {
    return this._matureAge
  }

  set matureAge(param){
    this._matureAge = param
    return this
  }


  // Grow the tree
  grow () {
    
    this.age++
    let heighGrow = 0

    if(this.age < 19 && this.height < this.limitHeight){
      heighGrow = (Math.floor(Math.random() * 5) / 10)
    }

    this.height += heighGrow
    this.height = Number(this.height.toFixed(2))

    if(this.age > this.limitAge){
      this.healthStatus = false
    }
  }

  // Produce some Applees
  produceFruit () {
    if(this.age > 0){
      let countFruits = Math.floor(Math.random() * 7) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Fruit()
        fruit.qualityFruits()
        this.fruits.push(fruit.quality)
      }
    }
  }

  // Get some fruits
  harvest () {
    let goodFruits = 0
    let badFruits = 0

    for(let i = 0; i < this.fruits.length; i++){
      if(this.fruits[i] === 'Good'){
        goodFruits++
      } else {
        badFruits++
      }
    }

    this.harvested =  `${this.fruits.length} (${goodFruits} Good, ${badFruits} Bad)`
  }

}

module.exports = FruitTree