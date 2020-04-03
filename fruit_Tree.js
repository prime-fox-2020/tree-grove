class FruitTree {
    constructor(name, age, height, matureage, healthstatus) {
        this.name = name;
        this.age = age;
        this.matureage = matureage;
        this.height = height;
        this.healthstatus = true;
        this.fruit = [];
        this.harvest = "";
        this.dieage = 26;
        this.maxAge = 23;
        // this.grow()
    }

    produceFruit() {
        let random = Math.floor(Math.random() * 56);
        let howMany = this.age >= this.matureage ? random : 0;
        // console.log(howMany);
        for (let i = 0; i < howMany; i++) {
            if (this.name == "MangoTree") {
                this.fruit.push(new Mango());
            } else if (this.name === "AppleTree") {
                this.fruit.push(new Apple());
            } else if (this.name === "PearTree") {
                this.fruit.push(new Pear());
            }
        }
        console.log(this.fruit);
    }

    grow() {
        this.age++;
        this.height += Math.floor(Math.random() * 12) / 10;
        if (this.age >= this.dieage) {
            this.healthstatus = false;
        }
    }

    harvest() {
        let [good, bad] = [0, 0];
        this.fruit.forEach(el => {
            el === "good" ? good++ : bad++;
        });
        this.harvest = `${bad + good}` + [`bad: ${bad}`, ` good: ${good}`];
    }
}

class Fruits {
    constructor() {
        this.quality = this.badOrBad();
    }

    badOrBad() {
        const condition = ["bad", "good"];
        return condition[Math.floor(Math.random() * 2)];
    }
}

// let test = new FruitTree();
// test.produceFruit()


module.exports = {
    FruitTree,
    Fruits
};