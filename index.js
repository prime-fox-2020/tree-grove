const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
	constructor() {
		this._array = [];
	}
	get array() {
		return this._array;
	}
	inputTree(treeName, treeAge, height, matureAge, healthStatus) {
		if (treeName === 'MangoTree') {
			const mango = new MangoTree(treeAge, height, matureAge, healthStatus);

			this.array.push(mango);
		} else if (treeName === 'AppleTree') {
			const apple = new AppleTree(treeAge, height, matureAge, healthStatus);

			this.array.push(apple);
		} else if (treeName === 'PearTree') {
			const pear = new PearTree(treeAge, height, matureAge, healthStatus);

			this.array.push(pear);
		}
	}
	nextYear() {
		for (let i of this.array) {
			i.grow();
		}
	}

	showAges() {
		let str = '';
		for (var i = 0; i < this.array.length; i++) {
			str += `${this.array[i].constructor.name} | age: ${this.array[i].age} years.\n`;
		}
		console.log(str);
	}
	showTrees() {
		console.log(`----------------- All Trees -----------------`);
		let str = '';
		for (var i = 0; i < this.array.length; i++) {
			str += `${this.array[i].constructor.name} | height: ${this.array[i].height} | age: ${this.array[i]
				.age} | mature age: ${this.array[i].matureAge} | health status: ${this.array[i].healthStatus}.\n`;
		}
		console.log(str);
	}

	showMatureTrees() {
		console.log(`----------------- Mature Trees -----------------`);
		let str = '';
		for (var i = 0; i < this.array.length; i++) {
			str += `${this.array[i].constructor.name} | height: ${this.array[i].height} | age: ${this.array[i]
				.age} | mature age: ${this.array[i].matureAge} | health status: ${this.array[i].healthStatus}.\n`;
		}
		console.log(str);
	}
	showDeadTrees() {
		console.log(`----------------- Dead Trees -----------------`);
		let str = '';
		for (var i = 0; i < this.array.length; i++) {
			if (this.array[i].healthStatus === false) {
				str += `${this.array[i].constructor.name} | height: ${this.array[i].height} | age: ${this.array[i]
					.matureAge} | health status : ${this.array[i].healthStatus}.\n`;
			}
		}
		console.log(str);
	}
}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam

grove.inputTree('MangoTree', 3, 1.8, 7, true);
grove.inputTree('MangoTree', 5, 2.4, 12, true);
grove.inputTree('AppleTree', 4, 1.2, 5, true);
grove.inputTree('PearTree', 7, 2, 15, true);

// next year
grove.nextYear();

// show trees ages
grove.showAges();

// show trees
grove.showTrees();

// show trees
grove.showMatureTrees();

// show trees
grove.showDeadTrees();
