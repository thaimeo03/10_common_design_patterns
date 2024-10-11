import { IFood } from "../interfaces/food.interface";
import { Farm } from "./farm.class";

export class Food1 implements IFood {
  farm: Farm;

  constructor() {
    this.farm = new Farm();
  }

  addFood(key: number, value: string) {
    this.farm.addFood(key, value);
  }
}