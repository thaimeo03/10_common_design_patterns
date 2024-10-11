import { IFarmA } from "../interfaces/farm-a.interface";
import { IFarmB } from "../interfaces/farm-b.interface";
import { Animal } from "./animal.class";
import { FarmB } from "./farm-b.class";

export class FarmBAdapter implements IFarmA {
  private readonly farmB: IFarmB

  constructor() {
    this.farmB = new FarmB();
  }

  addAnimal(animal: Animal): boolean {
    const date = new Date();
    return this.farmB.addAnimalWithDate(animal, date);
  }

  getAnimalsInfo(): void {
      this.farmB.getAnimalsInfoInFarm();
  }

  removeAnimal(animal: Animal): boolean {
    const date = new Date();
    return this.farmB.removeAnimalWithDate(animal, date);
  }
}