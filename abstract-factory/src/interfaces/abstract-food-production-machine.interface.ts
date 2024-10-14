import { IFoodMachine } from "./food-machine.interface";

export interface IAbstractCompanyProvider {
    createMachine(animal: string): IFoodMachine | null;
}