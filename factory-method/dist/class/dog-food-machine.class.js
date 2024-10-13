"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogFoodMachine = void 0;
const dog_food_class_1 = require("./dog-food.class");
const food_production_machine_class_1 = require("./food-production-machine.class");
class DogFoodMachine extends food_production_machine_class_1.FoodProductionMachine {
    constructor(ingredients) {
        super();
        this.ingredients = ingredients;
    }
    getFood() {
        return new dog_food_class_1.DogFood();
    }
    getIngredients() {
        return this.ingredients;
    }
}
exports.DogFoodMachine = DogFoodMachine;
