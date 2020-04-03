let Fruit = require('./fruit')

class FruitTree {
  
    constructor (age=0, height=0, healthStatus=true, matureAge, maxAge, maxHeight, maxFruit) {//age, height, matureAge, healthStatus
      this._age = age
      this._height = height
      this._fruits = []
      this._healthStatus = healthStatus
      this._harvested = ''
      this._matureAge = false
      this._whenMature = matureAge
      this._maxAge = maxAge
      this._maxHeight = maxHeight
      this._maxFruit = maxFruit
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
  
    get matureAge () {
      return this._matureAge
    }

    get whenMature () {
      return this._whenMature
    }
    
    get maxAge () {
      return this._maxAge
    }
    
    get maxHeight () {
      return this._maxHeight
    }
    
    get maxFruit () {
      return this._maxFruit
    }
  
    set age (value) {
      this._age = value
    }
  
    set height (value) {
      this._height = value
    }
  
    set fruits (value) {
      this._fruits = value
    }
  
    set healthStatus (value) {
      this._healthStatus = value
    }
  
    set harvested (value) {
      this._harvested = value
    }
  
    set matureAge (value) {
      this._matureAge = value
    }

    set whenMature (value) {
      this._whenMature = value
    }
    
    set maxAge (value) {
      this._maxAge = value
    }
    
    set maxHeight (value) {
      this._maxHeight = value
    }
    
    set maxFruit (value) {
      this._maxFruit = value
    }

    grow () {
      if (this.age < this.maxAge){
        this.age += 1
      } else {
        this.healthStatus = false
      }
  
      if(this.height < this.maxHeight){
        this.height += Math.floor((Math.random() * 11)+ 1)/10
      } else if (this._height > this.maxHeight){
        this.height = this.maxHeight
      }
  
      if(this.age >= this.whenMature){
        this.matureAge = true
      }
    }
  
    produceFruits () {
      let good = 0
      let bad = 0
  
      if(this.matureAge === true){
        let howMuch = Math.floor(Math.random() * this.maxFruit) + 1
        for(let a = 0; a < howMuch; a++){
          let changes = Math.floor(Math.random() * 11) + 1
          if(changes >= 6){
            good += a
          } else {
            bad += a
          }
        }
      }
      this.fruits.push(new Fruit(good, bad))
    }
  }

  module.exports = FruitTree