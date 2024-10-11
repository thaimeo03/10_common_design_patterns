import { Farm } from "../class/farm.class";

export interface IFarmBuilder {
  setFarmType(type: string): this;
  setLandSize(width: number, height: number): this;
  setFencesQuantity(quantity: number): this;
  getResult(): Farm
}