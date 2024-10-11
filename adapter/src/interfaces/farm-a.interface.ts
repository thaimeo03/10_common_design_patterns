import { Animal } from "../class/animal.class";

export interface IFarmA {
  addAnimal(animal: Animal): boolean;
  removeAnimal(animal: Animal): boolean;
  getAnimalsInfo(): void;
}