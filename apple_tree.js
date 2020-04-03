class FruitTree {
  constructor (name, age, height, mature,healthStatus) {
    this._name = name
    this._age = age
    this._height = height
    this._mature = mature
    this._fruits = 8
    this._healthStatus = healthStatus
    this._harvestedGood = this.fruits - Math.trunc((Math.random() * this.fruits))
    this._harvestedBad = this.fruits - this.harvestedGood
    this._harvested = `${this.fruits} (${this.harvestedGood} Good, ${this.harvestedBad} Bad)`
    this._growScale = 10
    this.printMature = 0 
  }

  get name () {
    return this._name
  }
  set name (param) {
    this._name = param
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
  set height (param) {
    this._height = param
  }
  get growScale () {
    return this._growScale
  }
  set growScale (param) {
    this._growScale = param
  }
  
  get fruits () {
    return this._fruits
  }
  set fruits (param) {
    this._fruits = param
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (param) {
    this._healthStatus = param
  }

  get harvestedGood () {
    return this._harvestedGood
  }
  set harvestedGood (param) {
    this._harvestedGood = param
  }
  get harvestedBad () {
    return this._harvestedBad
  }
  set harvestedBad (param) {
    this._harvested = param
  }
  get harvested () {
    return this._harvested
  }
  set harvested (param) {
    this._harvested = param
  }
  get mature () {
    return this._mature
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.age <= 16){
      let randomGrow = (Math.trunc(Math.random()*this.growScale))*0.1
      this.height += randomGrow
      this.height = +this.height.toFixed(1)
    }
    this.age += 1

    if(this.age === 18){
      this.healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    // console.log(this.age)
    // console.log(this.mature)
    if(this.age === this.mature){
      if(this.printMature === 0){
        console.log('---------------- MATURE ----------------')
        this.printMature = 1
      }
    }
        if(this.age>=this.mature){
          // console.log('yesss')
          this.fruits = Math.trunc(Math.random()*10)
        } else{
          this.fruits = 0
        }
  }

  // Get some fruits
  harvest () {
          // console.log('yesss')
    this.harvestedGood = this.fruits - Math.trunc((Math.random() * this.fruits))
    this.harvestedBad = this.fruits - this.harvestedGood
    this.harvested = `${this.fruits} (${this.harvestedGood} Good, ${this.harvestedBad} Bad)` 
  }
}


class AppleTree extends FruitTree{
    constructor(name,age,height,matureAge,healthStatus){
        super(name,age,height,matureAge,healthStatus)
    }
}

// let appleTree = new AppleTree('apple',4,3,6,true)
//    console.log('--- Apel Hidup ---')
//    do {
//      appleTree.grow()
//      appleTree.produceMangoes()
//      appleTree.harvest()
//      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
//    } while (appleTree.healthStatus != false)
//    console.log('--- Apel Mati ---')
  //  console.log(appleTree.mature)

module.exports = AppleTree