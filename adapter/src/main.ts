import { Animal } from "./class/animal.class";
import { FarmA } from "./class/farm-a.class";
import { FarmBAdapter } from "./class/farm-b-adapter.class";

class Main {
  static run() {
    console.log("\x1b[31m%s\x1b[0m", "Welcome to the zoo!\n");
    console.log("\x1b[33m%s\x1b[0m", "Adding animals:");
    
    // Animals
    const animals: Animal[] = [];

    const animal1 = new Animal("Lion", "Carnivore");
    const animal2 = new Animal("Tiger", "Carnivore");
    const animal3 = new Animal("Panda", "Herbivore");
    const animal4 = new Animal("Zebra", "Herbivore");
    const animal5 = new Animal("Elephant", "Herbivore");

    animals.push(animal1, animal2, animal3, animal4, animal5);

    // Farms
    const farmA = new FarmA();
    const farm  = new FarmBAdapter();
    let index = 0;

    const interval = setInterval(() => {
      const isAdded = farmA.addAnimal(animals[index]);
      if(isAdded) {
        console.log("\x1b[36m%s\x1b[0m", `${animals[index].name} added to farm A successfully`);
        index++;
      }
      else {
        console.log("\x1b[36m%s\x1b[0m", "Farm A is full");

        // Try to add animals to another Farm
        const isAdded = farm.addAnimal(animals[index]);
        if(!isAdded) {
          console.log("\x1b[35m%s\x1b[0m", "Farm B is full");
          clearInterval(interval);
        }
        else {
          console.log("\x1b[35m%s\x1b[0m", `${animals[index].name} added to farm B successfully`);
          index++;
        }
      }

      if(index === animals.length) {
        console.log("\x1b[33m%s\x1b[0m", "\nAll animals added to the farms:");
        farmA.getAnimalsInfo();
        farm.getAnimalsInfo();
        clearInterval(interval);
      }
    }, 1000);
  }
}

Main.run();