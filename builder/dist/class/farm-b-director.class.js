"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmBDirector = void 0;
const farm_builder_class_1 = require("./farm-builder.class");
class FarmBDirector {
    static construct() {
        return new farm_builder_class_1.FarmBuilder().setFarmType("B").setLandSize(10, 20).getResult();
    }
}
exports.FarmBDirector = FarmBDirector;
