const Fruit = require('./fruits.js') 

class Pear extends Fruit{
  constructor(quality){
    super(quality)
  }
}

module.exports = Pear
