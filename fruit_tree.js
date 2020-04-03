class FruitTree {
  constructor (name, age, height, matureAge, healthStatus, stopGrow ,dead) {
    this.name = name
    this._age = age
    this._height = height
    this._healthStatus = healthStatus || true
    this._fruits = []
    this._harvested = null
    this._matureAge = matureAge
    this._stopGrow = stopGrow
    this._dead = dead
  }
  get age () {
    return this._age
  }
  set age (input){
    this._age = input 
  }

  get height () {
    return this._height
  }
  set height (input) {
    this._height = input
  }

  get fruits () {
    return this._fruits
  }
  set fruits(input){
    this._fruits = input
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (input) {
    this._healthStatus = input
  }

  get harvested () {
    return this._harvested
  }
  set harvested(input){
    this._harvested = input
  }

  get matureAge(){
    return this._matureAge
  }

  get stopGrow (){
    return this._stopGrow
  }

  get dead(){
    return this._dead
  }

  // Grow the tree
  grow () {
    this.age += 1
    this.fruits.forEach(fruit => {
      fruit.ageFruit += 1
      // console.log(fruit.quality)
      if (fruit.ageFruit > fruit.matureFruitAge){
        fruit.quality = 'bad'
      }else
      if(fruit.ageFruit == fruit.matureFruitAge){
        fruit.quality = 'good'
      }
    });
    if (this.age <= this.stopGrow){
      this.height += this.randomHeight()
    }
    if (this.age >= this.dead){
      this.healthStatus = false
    } 
  }
  // Get some fruits
  harvest () {
    let immature = 0
    let good = 0
    let bad = 0
    let petik = []
    for (let i = 0 ; i < this.fruits.length ; i++){
      if (this.fruits[i].ageFruit >= this.fruits[i].matureFruitAge){
        petik.push(i)
      }
      if (this.fruits[i].ageFruit === this.fruits[i].matureFruitAge){
        good++
      }else
      if(this.fruits[i].ageFruit < this.fruits[i].matureFruitAge){
        immature++
      }else
      if(this.fruits[i].ageFruit > this.fruits[i].matureFruitAge){
        bad++
      }
    }
    this.fruits.forEach(el=>{
      console.log(el)
    })
    this.harvested = `${this.fruits.length} (${good} good, ${immature} immature, ${bad} bad)`
    // petik.forEach(el =>{
    //   this.fruits.splice(el,1)
    // })
  }
  produceFruits (fruitName = Fruit) {
    if (this.age >= this.matureAge){
      let numberOfFruits = this.randomFruit()
      for (let i = 0 ; i < numberOfFruits ; i++){
        this.fruits.push(new fruitName())
      }
    }
  }
  randomHeight(){
    return Math.ceil(Math.random()*3)/2
  }
  randomFruit(){
    return Math.ceil(Math.random()*5)
  }
}
class Fruit {
  constructor () {
    this._quality = 'immature'
    this._matureFruitAge = this.randomMatureFruit()
    this._ageFruit = 0
  }
  get quality (){
    return this._quality
  }
  set quality(input){
    this._quality = input
  }
  get matureFruitAge(){
    return this._matureFruitAge
  }
  get ageFruit(){
    return this._ageFruit
  }
  set ageFruit(input){
    this._ageFruit = input
  }
  randomMatureFruit(){
    let random = Math.ceil(Math.random()*5)
    return random
  }
}

module.exports = {FruitTree, Fruit}