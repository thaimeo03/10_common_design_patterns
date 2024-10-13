import { IFood } from "../interfaces/food.interface";
import { DogFood } from "./dog-food.class";
import { FoodProductionMachine } from "./food-production-machine.class";

export class DogFoodMachine extends FoodProductionMachine {
    private ingredients: string[];

    constructor(ingredients: string[]) {
        super();
        this.ingredients = ingredients;
    }

    getFood(): IFood {
        return new DogFood();
    }

    getIngredients(): string[] {
        return this.ingredients;
    }
}