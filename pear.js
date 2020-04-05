const Fruit = require('./fruit');

class Pear extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Pear';
  }
}

module.exports = Pear;