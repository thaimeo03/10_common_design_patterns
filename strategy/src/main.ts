import { BrickStrategy } from "./class/brick-strategy.class";
import { Material } from "./class/material.class";
import { WoodStrategy } from "./class/wood-strategy.class";

class Main {
  static run() {
    const material = new Material();

    material.use(BrickStrategy);
    material.use(WoodStrategy);
  }
}

Main.run();