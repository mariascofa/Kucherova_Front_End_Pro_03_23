class Hamburger {
  constructor(size, stuffing) {
    this.baseSelection = {
      size: size,
      stuffing: stuffing,
    };
  }

  static SIZE_SMALL = { price: 50, kkal: 20 };
  static SIZE_BIG = { price: 100, kkal: 40 };
  static STUFFING_CHEESE = { price: 10, kkal: 20 };
  static STUFFING_SALAD = { price: 20, kkal: 5 };
  static STUFFING_POTATO = { price: 15, kkal: 10 };
  static TOPPING_SAUCE = { toppingName: "sauce", price: 15, kkal: 0 };
  static TOPPING_MAYO = { toppingName: "mayo", price: 20, kkal: 5 };


  // allows to add the same toping several times, saves topping into the object by its name
  addTopping(toppingOption) {
    const ingredientName = toppingOption.toppingName;

    if (this.baseSelection.hasOwnProperty(ingredientName)) {
      this.baseSelection[ingredientName].price += toppingOption.price;
      this.baseSelection[ingredientName].kkal += toppingOption.kkal;
    } else {
      this.baseSelection[ingredientName] = {
        price: toppingOption.price,
        kkal: toppingOption.kkal,
      };
    }
  }

  //calculates kkal
  calculate() {
    let totalKkal = Object.values(this.baseSelection).reduce(
      (a, b) => a + b.kkal,
      0
    );
    return totalKkal;
  }

  //calculates price
  calculatePrice() {
    let totalPrice = Object.values(this.baseSelection).reduce(
      (a, b) => a + b.price,
      0
    );
    return totalPrice;
  }

  //allows to change hamburger size
  changeSize(newSize) {
    this.baseSelection.size = newSize;
  }

  //allows to change stuffing
  changeStuffing(newOption) {
    this.baseSelection.stuffing = newOption;
  }


  //deletes topping from the object by associated name
  deleteTopping(toppingToDelete) {
    let deleteName = toppingToDelete.toppingName;

    if (this.baseSelection.hasOwnProperty(deleteName)) {
      delete this.baseSelection[deleteName];
    } else {
      throw new Error("This topping hasn't been added before!");
    }
  }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// non-existing topping check
// hamburger.deleteTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("kkal, expecting 45 kkl, result:", hamburger.calculate());
console.log("price, expecting 80 tgr, result:", hamburger.calculatePrice());

hamburger.changeSize(Hamburger.SIZE_BIG);

console.log("kkal, expecting 65 kkl, result:", hamburger.calculate());
console.log("price, expecting 130 tgr, result:", hamburger.calculatePrice());

hamburger.changeStuffing(Hamburger.STUFFING_POTATO);

console.log("kkal, expecting 55 kkl, result:", hamburger.calculate());
console.log("price, expecting 135 tgr, result:", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.deleteTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("price, expecting 130 tgr, result:", hamburger.calculatePrice());
console.log("kkal, expecting 50 kkl, result:", hamburger.calculate());
