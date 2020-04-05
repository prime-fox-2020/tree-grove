class Fruit {
  // Produce a mango
  constructor(grade) {
    // 20 persen buah diprediksi qualitas buruk
    this._grade = grade;
  }

  get grade() {
    return this._grade;
  }
}

module.exports = Fruit;