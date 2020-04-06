class FruitTree {
    constructor(name, age, heights, mature, healthStatus) {
      this.Name = name
      this.Age = age
      this.MatureAge = mature
      this.MaxAge = 0
      this.Heights = heights
      this.MaxHeights = 10
      this.HealthStatus = healthStatus
      this.yields = []
      // this.fruits = []
    }

    get name () {
      return this.Name
    }
  
    get age () {
      return this.Age
    }
  
    get matureAge () {
      return this.MatureAge
    }
  
    get heights () {
      return `${this.Heights} m`
    }
  
    get healthStatus () {
      return this.HealthStatus
    }
  
    get maxAge () {
      return this.MaxAge
    }

    get yieldResult () {
      // yield result
      return `${this.yields[0]}, ${this.yields[1]} Good, ${this.yields[2]} Bad`
    }
  
    grow () {
      this.Age++
      // assuming that if the tree has met it's EOL
      if ( this.Age >= this.MaxAge ) {
        this.HealthStatus = false
      }
      // if age below mature, growth++
      if ( this.Age < this.MatureAge ) {
        this.Heights += Math.floor(Math.random() * this.Age) + 2
      }
    }
  
    maturedTree () {
      let random = Math.floor(Math.random() * this.MatureAge) + 1
      let fruiting = new Fruit()
  
      if (this.Age >= this.MatureAge) {
        for (let i = 0; i < random; i++) {
          this.fruits.push(fruiting)
        }
      }
    }
  
    harvest () {
      let total = this.fruits.length, [good, bad] = [0,0]
  
      for (let fruit = 0; fruit < total; fruit++) {
        good += this.fruits[fruit].quality == 'Good' ? 1 : 0
        bad += this.fruits[fruit].quality == 'Bad' ? 1 : 0
      }
  
      this.yields = [total, good, bad]
    }
  }
  
  class Fruit {
    constructor () {
      this.quality = this.fruitQuality()
    }
  
    fruitQuality () {
      let random = Math.floor(Math.random() * 5),
          grades = {5:'Good', 4:'Good', 3:'Good', 2:'Bad', 1:'Bad', 0:'Bad'}
      // console.log(grades[random])
      return grades[random] 
    }
  }

  module.exports = {FruitTree, Fruit}