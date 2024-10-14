import { IFoodMachine } from "../interfaces/food-machine.interface";

export interface IAbstractCompanyProvider {
    createMachine(animal: string): IFoodMachine | null;
}