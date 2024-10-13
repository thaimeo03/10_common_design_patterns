import { CatFoodMachine } from "./class/cat-food-machine.class";
import { DogFoodMachine } from "./class/dog-food-machine.class";
import { FoodProductionMachine } from "./class/food-production-machine.class";

class Main {
  static run() {
    let foodMachine: FoodProductionMachine;
    foodMachine = new CatFoodMachine(["flour", "eggs", "milk"]);
    foodMachine.makeFood();

    foodMachine = new DogFoodMachine(["apple", "banana", "milk"]);
    foodMachine.makeFood();
  }
}

Main.run();