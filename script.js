const burgerds = {
  small: {
    price: 50,
    calories: 20,
  },
  middle: {
    price: 75,
    calories: 30,
  },
  large: {
    price: 100,
    calories: 40,
  },
};

const modifier = {
  cheese: {
    price: 10,
    calories: 20,
  },
  salad: {
    price: 20,
    calories: 5,
  },
  potato: {
    price: 15,
    calories: 10,
  },
  seasoning: {
    price: 15,
    calories: 0,
  },
  mayonnaise: {
    price: 20,
    calories: 5,
  },
};

function Hamburger(burger) {
  this.selectedBurger = burger;
  this.addModifier = function (selectedModifier) {
    this.selectedBurger.price =
      selectedModifier.price + this.selectedBurger.price;
    this.selectedBurger.calories =
      selectedModifier.calories + this.selectedBurger.calories;
  };
  this.getPrice = function () {
    return this.selectedBurger.price;
  };
  this.getCalories = function () {
    return this.selectedBurger.calories;
  };
}

const hamburger = new Hamburger(burgerds.small);

hamburger.addModifier(modifier.mayonnaise);
hamburger.addModifier(modifier.potato);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());
