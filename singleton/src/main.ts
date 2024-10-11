import { Food1 } from "./class/food1.class";
import { Food2 } from "./class/food2.class";

class Main {
  static run() {
    const food1 = new Food1();
    food1.addFood(1, 'Apple');
    food1.addFood(2, 'Orange');

    const food2 = new Food2();
    food2.addFood(4, 'Chicken');
    food2.addFood(5, 'Water');

    food1.farm.showFood();
    food2.farm.showFood();
  }
}

Main.run();