import { FarmADirector } from "./class/farm-a-director.class";
import { FarmBDirector } from "./class/farm-b-director.class";


class Main {
  static run() {
    const farmA = FarmADirector.construct();
    const farmB = FarmBDirector.construct();

    console.log(farmA.build());
    console.log(farmB.build());
  }
}

Main.run();