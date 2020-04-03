class Fruit {
  constructor () {
    this.quality = this.quality()//isi dari fungsi quality di bawah
  }
  quality(){
    let value = ['GOOD','BAD'];//quality array
    return value[Math.floor(Math.random()*value.length)]//random value quality
  }
}

module.exports = Fruit