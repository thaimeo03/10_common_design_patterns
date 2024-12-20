"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmB = void 0;
class FarmB {
    constructor() {
        this.maxCapacity = 5;
        this.animals = [];
        this.updatedAts = [];
    }
    addAnimalWithDate(animal, lastTime) {
        if (this.animals.length < this.maxCapacity) {
            this.animals.push(animal);
            this.updatedAts.push(lastTime);
            return true;
        }
        else {
            return false;
        }
    }
    removeAnimalWithDate(animal, lastTime) {
        const index = this.animals.indexOf(animal);
        if (index > -1) {
            this.animals.splice(index, 1);
            this.updatedAts.push(lastTime);
            return true;
        }
        else {
            return false;
        }
    }
    getAnimalsInfoInFarm() {
        console.log("\x1b[35m%s\x1b[0m", "Farm B has " + this.animals.length + "/" + this.maxCapacity + " animals");
        for (let i = 0; i < this.animals.length; i++) {
            console.log("\x1b[35m%s\x1b[0m", "Name: " + this.animals[i].name + ", Breed: " + this.animals[i].breed);
            console.log("\x1b[35m%s\x1b[0m", "Updated at: " + this.updatedAts[i].toLocaleTimeString('en-US'));
        }
    }
}
exports.FarmB = FarmB;
