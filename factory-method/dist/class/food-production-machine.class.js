"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodProductionMachine = void 0;
class FoodProductionMachine {
    makeFood() {
        const food = this.getFood();
        const ingredients = this.getIngredients();
        food.mixIngredients(ingredients);
    }
}
exports.FoodProductionMachine = FoodProductionMachine;
