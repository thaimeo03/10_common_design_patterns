import { Farm } from "./class/farm.class";
import { Visitor } from "./class/visitor.class";
import { Zoo } from "./class/zoo.class";

class Main {
  static run() {
    const zoo = new Zoo();

    const farm1 = new Farm(1);
    const farm2 = new Farm(2);

    const visitor1 = new Visitor("John", farm1);
    const visitor2 = new Visitor("Mary", farm2);
    const visitor3 = new Visitor("Tom", farm1);

    zoo.notify("Welcome to the Zoo!");
    console.log();
    zoo.notify("We have a new visitor: " + visitor1.name);
    console.log();
    zoo.notify("We have a new visitor: " + visitor2.name);
    console.log();
    zoo.notify("We have a new visitor: " + visitor3.name);

    visitor2.delete();
    console.log();

    zoo.notify("Opening farm 1");
  }
}

Main.run();