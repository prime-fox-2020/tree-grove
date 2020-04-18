const Fruit =  require('./fruit')

class Apple extends Fruit{
  constructor(age, height, matureAge, healthStatus){
    super(age, height, matureAge, healthStatus)
  }

}


module.exports = Apple