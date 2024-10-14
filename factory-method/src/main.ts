import { CatFoodMachine } from "./class/cat-food-machine.class";
import { DogFoodMachine } from "./class/dog-food-machine.class";
import { FoodMachine } from "./class/food-machine.class";


class Main {
  static run() {
    let foodMachine: FoodMachine = new CatFoodMachine();
    foodMachine.makeFood();    

    foodMachine = new DogFoodMachine();
    foodMachine.makeFood();
  }
}

Main.run();