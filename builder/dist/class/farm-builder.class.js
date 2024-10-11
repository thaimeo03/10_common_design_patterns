"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmBuilder = void 0;
const farm_class_1 = require("./farm.class");
class FarmBuilder {
    constructor() {
        this.farm = new farm_class_1.Farm();
    }
    setFarmType(type) {
        this.farm.type = type;
        return this;
    }
    setLandSize(width, height) {
        this.farm.width = width;
        this.farm.height = height;
        return this;
    }
    setFencesQuantity(quantity) {
        this.farm.fencesQuantity = quantity;
        return this;
    }
    getResult() {
        return this.farm;
    }
}
exports.FarmBuilder = FarmBuilder;
