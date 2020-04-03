const FruitTree = require("./fruit_tree");
let Fruit = require("./fruit");

class MangoTree extends FruitTree {
  constructor(name,age,height,healthStatus,matureAge,limitYear) {
    super(name,age,height,healthStatus,matureAge,limitYear)
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