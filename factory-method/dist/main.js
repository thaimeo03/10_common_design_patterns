"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_food_machine_class_1 = require("./class/cat-food-machine.class");
const dog_food_machine_class_1 = require("./class/dog-food-machine.class");
class Main {
    static run() {
        let foodMachine;
        foodMachine = new cat_food_machine_class_1.CatFoodMachine(["flour", "eggs", "milk"]);
        foodMachine.makeFood();
        foodMachine = new dog_food_machine_class_1.DogFoodMachine(["apple", "banana", "milk"]);
        foodMachine.makeFood();
    }
}
Main.run();
