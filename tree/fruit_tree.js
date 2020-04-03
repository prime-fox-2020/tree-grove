class FruitTree{
    constructor (name ,age = 0, height = 0, fruits = 0, healthStatus = true, harvested = 0,  limitHeight = 5) {
      this._name = name
      this._age = age
      this._height = height
      this._fruits = []
      this._healthStatus = healthStatus
      this._harvested = harvested
      this.limitHeight = limitHeight
    }
  
    get age () {
      return this._age
    }
  
    get height () {
      return this._height
    }
  
    get fruits () {
      return this.fruit
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
  
      let heighGrow = 0
  
      if(this._age < 10 && this.height < 4.4){
        heighGrow = (Math.floor(Math.random() * 10) / 10)
      }
  
      this._height += heighGrow
      this._height = Number(this._height.toFixed(2))
  
      if(this._age > 19){
        this._healthStatus = false
      }
    }
  
    // Produce some Applees
    produceFruit () {
      if(this._age > 0){
        let countFruits = Math.floor(Math.random() * 7) + 1
  
        for(let i=0; i<countFruits; i++){
          let fruit = new Fruit
          fruit.qualityFruits()
          this._fruits.push(fruit.quality)
        }
      }
  
    }
  
    // Get some fruits
    harvest () {
      let goodFruits = 0
      let badFruits = 0
  
      for(let i=0; i<this._fruits.length; i++){
        if(this._fruits[i] === 'Good'){
          goodFruits++
        } else {
          badFruits++
        }
      }
  
      this._harvested =  `${this._fruits.length} (${goodFruits} Good, ${badFruits} Bad)`
    }
  
}

module.exports = FruitTree