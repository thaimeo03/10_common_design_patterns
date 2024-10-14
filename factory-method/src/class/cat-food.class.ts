import { IFood } from "../interfaces/food.interface";

export class CatFood implements IFood {
    mixIngredients(): void {
        console.log("Mixing ingredients for cat");
    }
}