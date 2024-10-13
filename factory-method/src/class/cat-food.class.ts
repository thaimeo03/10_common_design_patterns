import { IFood } from "../interfaces/food.interface";

export class CatFood implements IFood {
    mixIngredients(ing: string[]): void {
        console.log("Mixing ingredients for cat: " + ing.join(", "));
    }
}