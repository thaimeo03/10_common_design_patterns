import { IFoodMachine } from "../interfaces/food-machine.interface";

export class DogFoodCompanyA implements IFoodMachine {
    mixIngredients(ing: string[]): void {
        console.log("Company A: Mixing ingredients for dog: " + ing.join(", "));
    }
}