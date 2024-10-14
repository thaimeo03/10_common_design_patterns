import { IFoodMachine } from "../interfaces/food-machine.interface";
import { IAbstractCompanyProvider } from "./abstract-food-production-machine.class";
import { CatFoodCompanyA } from "./cat-food-company-a.class";
import { DogFoodCompanyA } from "./dog-food-company-a.class";

export class FoodMachineCompanyA implements IAbstractCompanyProvider {
    createMachine(animal: string): IFoodMachine | null {
        switch (animal) {
            case "cat":
                return new CatFoodCompanyA();
            case "dog":
                return new DogFoodCompanyA();
            default:
                return null;
        }
    }
}