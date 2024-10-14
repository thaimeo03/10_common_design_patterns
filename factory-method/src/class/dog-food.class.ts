import { IFood } from "../interfaces/food.interface";

export class DogFood implements IFood {
    mixIngredients(): void {
        console.log("Mixing ingredients for dog");
    }
}