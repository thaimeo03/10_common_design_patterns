"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food2 = void 0;
const farm_class_1 = require("./farm.class");
class Food2 {
    constructor() {
        this.farm = new farm_class_1.Farm();
    }
    addFood(key, value) {
        this.farm.addFood(key, value);
    }
}
exports.Food2 = Food2;
