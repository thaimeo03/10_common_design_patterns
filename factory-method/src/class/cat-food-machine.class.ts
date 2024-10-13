import { IFood } from "../interfaces/food.interface";
import { CatFood } from "./cat-food.class";
import { FoodProductionMachine } from "./food-production-machine.class";

export class CatFoodMachine extends FoodProductionMachine {
    private ingredients: string[];

    constructor(ingredients: string[]) {
        super();
        this.ingredients = ingredients;
    }

    getFood(): IFood {
        return new CatFood();
    }

    getIngredients(): string[] {
        return this.ingredients;
    }
}