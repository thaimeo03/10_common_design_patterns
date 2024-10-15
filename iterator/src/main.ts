import { FarmIterator } from "./class/farm-iterator.class";
import { Farm } from "./class/farm.class";
import { IFarm } from "./interfaces/farm.interface";

class Main {
  static run() {
    const farms: IFarm[] = []
    farms.push(new Farm("Farm 1"), new Farm("Farm 2"), new Farm("Farm 3"));

    const farmIterator = new FarmIterator(farms);

    while (farmIterator.hasNext()) {
      farmIterator.next().displayName();
    }
  }
}

Main.run();