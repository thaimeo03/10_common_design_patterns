"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmADirector = void 0;
const farm_builder_class_1 = require("./farm-builder.class");
class FarmADirector {
    static construct() {
        return new farm_builder_class_1.FarmBuilder().setFarmType("A").setLandSize(10, 10).setFencesQuantity(5).getResult();
    }
}
exports.FarmADirector = FarmADirector;
