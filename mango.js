const Fruit = require('./fruit');

class Mango extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Mango';
  }
}

module.exports = Mango;