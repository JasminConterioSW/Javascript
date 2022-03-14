const zoo = {
    cash: 4000,
    spend: function (amount) {
        if (this.cash < amount) {
            throw "Not enough money!";
        }
        this.cash -= amount;
        console.log(`Remaining funds: ${this.cash}`);
    }
};

const herbivore = {
    feedHerbivoreFood: function() {
        if (this.hungerMeter < this.maxFullnessValue) {
            this.hungerMeter += 1;
            zoo.cash -= 200;
        }
        console.log(`You have a just fed the herbivore ${this.name} and it now has fullness of ${this.hungerMeter}`)
    }
}

const carnivore = {
    feedCarnivorefood: function() {
        if (this.hungerMeter < this.maxFullnessValue) {
            this.hungerMeter += 1;
            zoo.cash -= 200;
        }
        console.log(`You have a just fed the carnivore ${this.name} and it now has fullness of ${this.hungerMeter}`)
    }
}

const animal = {
    init: function (name, species, diet) {
        this.name = name;
        this.species = species;
        this.hungerMeter = 50;
        this.maxFullnessValue = 100;
        this.feed = (diet.feedHerbivoreFood || diet.feedCarnivorefood);
    },

};

var zara = Object.create(animal);
zara.init("Zara", "zebra", herbivore);
zara.feed()

var leo = Object.create(animal);
leo.init("Leo", "lion", carnivore);
leo.feed()
leo.feed()