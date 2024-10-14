import { IAbstractCompanyProvider } from "./abstract-food-production-machine.class";
import { FoodMachineCompanyA } from "./food-machine-company-a.class";
import { FoodMachineCompanyB } from "./food-machine-company-b.class";

export class FoodCompanyProvider {
    constructor() {
        throw new Error("Cannot create an instance this class.");
    }

    static getFoodCompany(name: string): IAbstractCompanyProvider {
        switch (name) {
            case "A":
                return new FoodMachineCompanyA();
            case "B":
                return new FoodMachineCompanyB();
            default:
                throw new Error("Invalid food company: " + name);
        }
    }
}