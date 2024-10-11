"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_class_1 = require("./class/animal.class");
const farm_a_class_1 = require("./class/farm-a.class");
const farm_b_adapter_class_1 = require("./class/farm-b-adapter.class");
class Main {
    static run() {
        console.log("\x1b[31m%s\x1b[0m", "Welcome to the zoo!\n");
        console.log("\x1b[33m%s\x1b[0m", "Adding animals:");
        // Animals
        const animals = [];
        const animal1 = new animal_class_1.Animal("Lion", "Carnivore");
        const animal2 = new animal_class_1.Animal("Tiger", "Carnivore");
        const animal3 = new animal_class_1.Animal("Panda", "Herbivore");
        const animal4 = new animal_class_1.Animal("Zebra", "Herbivore");
        const animal5 = new animal_class_1.Animal("Elephant", "Herbivore");
        animals.push(animal1, animal2, animal3, animal4, animal5);
        // Farms
        const farmA = new farm_a_class_1.FarmA();
        const farm = new farm_b_adapter_class_1.FarmBAdapter();
        let index = 0;
        const interval = setInterval(() => {
            const isAdded = farmA.addAnimal(animals[index]);
            if (isAdded) {
                console.log("\x1b[36m%s\x1b[0m", `${animals[index].name} added to farm A successfully`);
                index++;
            }
            else {
                console.log("\x1b[36m%s\x1b[0m", "Farm A is full");
                // Try to add animals to another Farm
                const isAdded = farm.addAnimal(animals[index]);
                if (!isAdded) {
                    console.log("\x1b[35m%s\x1b[0m", "Farm B is full");
                    clearInterval(interval);
                }
                else {
                    console.log("\x1b[35m%s\x1b[0m", `${animals[index].name} added to farm B successfully`);
                    index++;
                }
            }
            if (index === animals.length) {
                console.log("\x1b[33m%s\x1b[0m", "\nAll animals added to the farms:");
                farmA.getAnimalsInfo();
                farm.getAnimalsInfo();
                clearInterval(interval);
            }
        }, 1000);
    }
}
Main.run();
