import { IFoodMachine } from "../interfaces/food-machine.interface";
import { IAbstractCompanyProvider } from "./abstract-food-production-machine.class";
import { CowFoodCompanyB } from "./cow-food-company-b.class";

export class FoodMachineCompanyB implements IAbstractCompanyProvider {
    createMachine(animal: string): IFoodMachine | null {
        switch (animal) {
            case "cow":
                return new CowFoodCompanyB();
            default:
                return null;
        }
    }
}