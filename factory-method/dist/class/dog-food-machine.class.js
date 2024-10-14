"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogFoodMachine = void 0;
const dog_food_class_1 = require("./dog-food.class");
const food_machine_class_1 = require("./food-machine.class");
class DogFoodMachine extends food_machine_class_1.FoodMachine {
    getFood() {
        return new dog_food_class_1.DogFood();
    }
}
exports.DogFoodMachine = DogFoodMachine;
