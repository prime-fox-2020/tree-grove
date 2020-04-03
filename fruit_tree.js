class FruitTree {
	constructor(age, height, matureAge, healthStatus) {
		this._age = age;
		this._height = height;
		this._fruits = [];
		this._healthStatus = healthStatus;
		this._harvested = '';
		this._matureAge = matureAge;
		this._cek = false;
		this._stopGrowing = 20;
		this._stopProducing = 20;
	}
	get matureAge() {
		return this._matureAge;
	}

	set matureAge(num) {
		return (this._matureAge = num);
	}

	get age() {
		return this._age;
	}

	set age(num) {
		this._age = num;
	}

	get height() {
		return this._height;
	}

	set height(num) {
		this._height = num;
	}

	get fruits() {
		return this._fruits;
	}

	set fruits(num) {
		this._fruits = num;
	}

	get healthStatus() {
		return this._healthStatus;
	}
	set healthStatus(cek) {
		this._healthStatus = cek;
	}

	get harvested() {
		return this._harvested;
	}
	set harvested(str) {
		this._harvested = str;
	}

	// Get current states here

	// Grow the tree
	grow() {
		//Tambah Umur
		//Tambah tinggi
		//Tentukan Mature Age
		//Tentukan kapan tidak tumbuh lagi
		//Tentukan kapan tidak berbuah lagi
		this.age++;
		this._fruits = [];
		if (this.age < this._stopGrowing) {
			this.height++;
		}
		if (this.age >= this._matureAge) {
			this._cek = true;
		}
		if (this.age === this._stopProducing) {
			this._healthStatus = false;
		}
	}

	// Produce some mangoes
	produceFruits() {
		if (this._cek === true) {
			let acak = Math.round(Math.random() * 16);
			for (var i = 0; i < acak; i++) {
				this._fruits.push(new Fruit());
			}
		}
	}

	// Get some fruits
	harvest() {
		let good = 0;
		let bad = 0;
		for (const iterator of this._fruits) {
			if (iterator.quality === 'Good') {
				good++;
			} else {
				bad++;
			}
		}
		this.harvested = `${good + bad} (${good} good, ${bad} bad )`;
	}
}

module.exports = FruitTree;
