class Fruit {
	constructor() {
		this.quality = this.random();
	}
	random() {
		let acak = Math.round(Math.random() * 10);
		if (acak > 5) {
			return 'Good';
		} else {
			return 'Bad';
		}
	}
}

module.exports = Fruit