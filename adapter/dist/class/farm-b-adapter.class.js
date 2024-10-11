"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmBAdapter = void 0;
const farm_b_class_1 = require("./farm-b.class");
class FarmBAdapter {
    constructor() {
        this.farmB = new farm_b_class_1.FarmB();
    }
    addAnimal(animal) {
        const date = new Date();
        return this.farmB.addAnimalWithDate(animal, date);
    }
    getAnimalsInfo() {
        this.farmB.getAnimalsInfoInFarm();
    }
    removeAnimal(animal) {
        const date = new Date();
        return this.farmB.removeAnimalWithDate(animal, date);
    }
}
exports.FarmBAdapter = FarmBAdapter;
