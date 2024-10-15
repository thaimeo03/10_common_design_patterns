"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_food_machine_class_1 = require("./class/cat-food-machine.class");
const dog_food_machine_class_1 = require("./class/dog-food-machine.class");
const food_machine_v2_class_1 = require("./class/food-machine-v2.class");
class Main {
    static run() {
        // v1
        let foodMachine = new cat_food_machine_class_1.CatFoodMachine();
        foodMachine.makeFood();
        foodMachine = new dog_food_machine_class_1.DogFoodMachine();
        foodMachine.makeFood();
        // v2
        let food = food_machine_v2_class_1.FoodMachineV2.selectAnimalFood("cat");
        food.mixIngredients();
        food = food_machine_v2_class_1.FoodMachineV2.selectAnimalFood("dog");
        food.mixIngredients();
    }
}
Main.run();
