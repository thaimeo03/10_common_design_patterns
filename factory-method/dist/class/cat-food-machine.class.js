"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatFoodMachine = void 0;
const cat_food_class_1 = require("./cat-food.class");
const food_machine_class_1 = require("./food-machine.class");
class CatFoodMachine extends food_machine_class_1.FoodMachine {
    getFood() {
        return new cat_food_class_1.CatFood();
    }
}
exports.CatFoodMachine = CatFoodMachine;
