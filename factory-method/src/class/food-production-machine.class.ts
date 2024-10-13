import { IFood } from "../interfaces/food.interface";

export abstract class FoodProductionMachine {

    makeFood(): void {
        const food = this.getFood();
        const ingredients = this.getIngredients();
        food.mixIngredients(ingredients);
    }

    abstract getIngredients(): string[]

    abstract getFood(): IFood;
}