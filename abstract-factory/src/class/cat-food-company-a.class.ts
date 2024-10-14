import { IFoodMachine } from "../interfaces/food-machine.interface";

export class CatFoodCompanyA implements IFoodMachine {
    mixIngredients(ing: string[]): void {
        console.log("Company A: Mixing ingredients for cat: " + ing.join(", "));
    }
}