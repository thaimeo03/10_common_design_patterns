"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmA = void 0;
class FarmA {
    constructor() {
        this.maxCapacity = 2;
        this.animals = [];
    }
    addAnimal(animal) {
        if (this.animals.length < this.maxCapacity) {
            this.animals.push(animal);
            return true;
        }
        else {
            return false;
        }
    }
    removeAnimal(animal) {
        const index = this.animals.indexOf(animal);
        if (index > -1) {
            this.animals.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getAnimalsInfo() {
        console.log("\x1b[36m%s\x1b[0m", "Farm A has " + this.animals.length + "/" + this.maxCapacity + " animals");
        for (const animal of this.animals) {
            console.log("\x1b[36m%s\x1b[0m", "Name: " + animal.name + ", Breed: " + animal.breed);
        }
    }
}
exports.FarmA = FarmA;
