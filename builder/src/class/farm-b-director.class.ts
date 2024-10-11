import { Farm } from "./farm.class";
import { FarmBuilder } from "./farm-builder.class";

export class FarmBDirector {
  static construct(): Farm {
    return new FarmBuilder().setFarmType("B").setLandSize(10, 20).getResult();
  }
}