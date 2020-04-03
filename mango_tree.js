const FruitTree = require("./fruit_tree");
let Fruit = require("./fruit");
// const Mango = require("./mango");

class MangoTree extends FruitTree {
  constructor(name,age,height,matureAge,healthStatus) {
    super(name,age,height,matureAge,healthStatus);
  }
  produceMangoes() {
    super.produceFruits();
  }
}
class Mango extends Fruit {
  constructor(){
      super()
  }
}

module.exports = MangoTree 