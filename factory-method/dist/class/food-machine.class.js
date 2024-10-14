"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodMachine = void 0;
class FoodMachine {
    makeFood() {
        const food = this.getFood();
        food.mixIngredients();
    }
}
exports.FoodMachine = FoodMachine;
