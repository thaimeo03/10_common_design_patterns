import { IFarmBuilder } from "../interfaces/farm-builder.interface";
import { Farm } from "./farm.class";

export class FarmBuilder implements IFarmBuilder {
  private farm: Farm

  constructor() {
    this.farm = new Farm();
  }

  setFarmType(type: string): this {
    this.farm.type = type;
    return this;
  }

  setLandSize(width: number, height: number): this {
    this.farm.width = width;
    this.farm.height = height;
    return this;
  }

  setFencesQuantity(quantity: number): this {
    this.farm.fencesQuantity = quantity;
    return this;
  }

  getResult(): Farm {
    return this.farm
  }
}