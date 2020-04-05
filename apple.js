const Fruit = require('./fruit');

class Apple extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Apple';
  }
}

module.exports = Apple;