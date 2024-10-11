import { Animal } from "../class/animal.class";

export interface IFarmB {
  addAnimalWithDate(animal: Animal, updatedAt: Date): boolean;
  removeAnimalWithDate(animal: Animal, updatedAt: Date): boolean;
  getAnimalsInfoInFarm(): void;
}