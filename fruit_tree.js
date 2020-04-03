class FruitTree {

    // Initialize a new MangoTree
    constructor(treeName,treeAge,treeHeight,treeMatureAge,treeStatus) {
      this.treeName = treeName,
      this._age = treeAge
      this._height = treeHeight
      this._harvested = 0 // total ,(x good, y bad )
      this._healthStatus = treeStatus
      this._matureAge = treeMatureAge
      this.maxTreeAge = Math.round((Math.random() * (30 - 20) + 20))//umur pohon normal -> bisa 20 - 30 thn
      this.maxAgeGrow = Math.floor((Math.random() * (10 - 5) + 5))
      this._fruits = [];
    }
  
    get age() {
      return this._age;
    }
  
    get height() {
      return this._height
    }
  
    get fruits() {
      return this._fruits
    }
  
    get healthStatus() {
      return this._healthStatus
    }
  
    get harvested() {
      return this._harvested
    }
  
    // Get current states here
  
    // Grow the tree
    grow() {
      this._age++
      let heightGrow = Math.round(Math.random() * 10) / 10
      if (this._age < this.maxAgeGrow) {
        this._height += heightGrow
      }
      if (this._age == this.maxTreeAge) {
        this._healthStatus = false;
      }
    }
  
    // Produce some mangoes
    produceFruit() {
      this._fruits = []
      let quality = ['good', 'bad']
      let randomSum = Math.round(Math.random() * 10) // jumlah buah yg di produce
      // console.log(this._matureAge)
      // if (this._age >= this._matureAge) {
      while (randomSum >= 0) {
        let random = Math.floor(Math.random() * 2) // bisa 0 sama bisa 1 
        this._fruits.push(new Fruit(quality[random]))
        randomSum--
        // }
      }
  
    }
  
    // Get some fruits
    harvest() {
      let harvestedFruit = this._fruits.length
      let countGood = 0
      let countBad = 0
      for (var i = 0; i < harvestedFruit; i++) {
        if (this._fruits[i].quality == 'good') {
          countGood++
        } else if (this._fruits[i].quality == 'bad') {
          countBad++
        }
      }
      this._harvested = `${this._fruits.length} (${countGood} good, ${countBad} bad)`
    }
  }
  
  class Fruit {
    // Produce a mango
    constructor(random) {
      this.quality = random
    }
  }

  module.exports = FruitTree