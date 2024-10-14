import { IFoodMachine } from "../interfaces/food-machine.interface";

export class CowFoodCompanyB implements IFoodMachine {
    mixIngredients(ing: string[]): void {
        console.log("Company B: Mixing ingredients for cow: " + ing.join(", "));
    }
}