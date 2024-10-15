import { CatFoodMachine } from "./class/cat-food-machine.class";
import { DogFoodMachine } from "./class/dog-food-machine.class";
import { FoodMachineV2 } from "./class/food-machine-v2.class";
import { FoodMachine } from "./class/food-machine.class";


class Main {
  static run() {
    // v1
    let foodMachine: FoodMachine = new CatFoodMachine();
    foodMachine.makeFood();    

    foodMachine = new DogFoodMachine();
    foodMachine.makeFood();

    // v2
    let food = FoodMachineV2.selectAnimalFood("cat");
    food.mixIngredients();

    food = FoodMachineV2.selectAnimalFood("dog");
    food.mixIngredients();
  }
}

Main.run();