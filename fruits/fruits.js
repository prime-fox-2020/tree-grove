class Fruit {
    // Produce a Apple
    constructor (quality) {
      this.quality = quality
    }
  
    qualityFruits(){
      let randomFruits = Math.round(Math.random())
      if(randomFruits === 0){
        this.quality = 'Good'
        return this
      } else {
        this.quality = 'bad'
        return this
      }
    }
}

module.exports = Fruit