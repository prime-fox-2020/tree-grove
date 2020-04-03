const Fruit = require('./fruits.js') 

class Apple extends Fruit{
  constructor(quality){
    super(quality)
  }
}

module.exports = Apple