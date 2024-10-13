"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatFoodMachine = void 0;
const cat_food_class_1 = require("./cat-food.class");
const food_production_machine_class_1 = require("./food-production-machine.class");
class CatFoodMachine extends food_production_machine_class_1.FoodProductionMachine {
    constructor(ingredients) {
        super();
        this.ingredients = ingredients;
    }
    getFood() {
        return new cat_food_class_1.CatFood();
    }
    getIngredients() {
        return this.ingredients;
    }
}
exports.CatFoodMachine = CatFoodMachine;
