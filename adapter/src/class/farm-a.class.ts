import { IFarmA } from "../interfaces/farm-a.interface";
import { Animal } from "./animal.class";

export class FarmA implements IFarmA {
  private maxCapacity = 2;
  private animals: Animal[] = [];

  addAnimal(animal: Animal) {
    if(this.animals.length < this.maxCapacity) {
      this.animals.push(animal);
      return true
    }
    else {
      return false
    }
  }

  removeAnimal(animal: Animal) {
    const index = this.animals.indexOf(animal);
    if (index > -1) {
      this.animals.splice(index, 1);
      return true
    }
    else {
      return false
    }
  }

  getAnimalsInfo() {
    console.log("\x1b[36m%s\x1b[0m", "Farm A has " + this.animals.length + "/" + this.maxCapacity + " animals");
    for(const animal of this.animals) {
      console.log("\x1b[36m%s\x1b[0m", "Name: " + animal.name + ", Breed: " + animal.breed);
    }
  }
}