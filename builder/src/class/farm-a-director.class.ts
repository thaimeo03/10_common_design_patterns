import { FarmBuilder } from "./farm-builder.class";
import { Farm } from "./farm.class";

export class FarmADirector {
  static construct(): Farm {
    return new FarmBuilder().setFarmType("A").setLandSize(10, 10).setFencesQuantity(5).getResult();
  }
}