import { IFood } from "../interfaces/food.interface";

export abstract class FoodMachine {
    makeFood() {
        const food = this.getFood();
        food.mixIngredients();
    }

    abstract getFood(): IFood;
}