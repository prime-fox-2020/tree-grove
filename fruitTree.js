const Fruit = require('./fruit')

class FruitTree {
  constructor(age, height, matureAge, healthStatus,diedAge) {
    this._age = age
    this._height = height
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = ""
    this._fruit = 0
    this._goodFruit = 0
    this._badFruit = 0
    this._mature = false
    this._matureAge = matureAge
    this._diedAge = diedAge
  }

  get age() {
    return this._age
  }

  set age(num) {
    this._age = num
  }

  get height() {
    return this._height
  }

  set height(num) {
    this._height = num
  }

  get fruits() {
    return this._fruits
  }

  get healthStatus() {
    return this._healthStatus
  }

  set healthStatus(check){
    this._healthStatus = check
  }

  get goodFruit() {
    return this._goodFruit
  }

  set goodFruit(num){
    this._goodFruit = num
  }

  get badFruit() {
    return this._badFruit
  }

  set badFruit(num){
    this._badFruit = num
  }

  get diedAge() {
    return this._diedAge
  }

  set diedAge(num){
    this._diedAge = num
  }

  get harvested() {
    return this._harvested
  }

  get mature() {
    return this._mature
  }

  get fruit(){
    return this._fruit
  }

  set mature(check){
    this._mature = check
  }

  // Get current states here
  set harvested(jumlah) {
    this._harvested = jumlah
  }
  // Grow the tree
  grow() {
    this._age++
    if (this._age >= this._diedAge) {
      this._healthStatus = false
    }
    if (this._age >= this._matureAge) {
      this._mature = true
    } else {
      this._height = this._height + Math.round(Math.random() * 2)
    }
  }

  // Produce some Fruits
  produceFruits() {
    if (this._mature) {
      this._fruit = Math.round(Math.random() * 15)
      for (let i = 0; i < this.fruit; i++) {
        let kualitas = new Fruit()
        this._fruits.push(kualitas)
      }
    }
  }

  // Get some fruits
  harvest() {
    for (const key of this._fruits) {
      if (key.quality == "good") {
        this._goodFruit++
      } else {
        this._badFruit++
      }
    }
    this._harvested = `${this._fruit} (${this._goodFruit} good, ${this._badFruit} bad)`
    this._fruits = []
    this._goodFruit = 0
    this._badFruit = 0
  }
}


module.exports = FruitTree;