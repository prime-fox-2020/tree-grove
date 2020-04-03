const Fruit = require('./fruits.js') 

class Mango extends Fruit{
  constructor(quality){
    super(quality)
  }
}

module.exports = Mango