import { IFood } from "../interfaces/food.interface";

export class DogFood implements IFood {
    mixIngredients(ing: string[]): void {
        console.log("Mixing ingredients for dog: " + ing.join(", "));
    }
}