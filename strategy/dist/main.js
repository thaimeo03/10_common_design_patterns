"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brick_strategy_class_1 = require("./class/brick-strategy.class");
const material_class_1 = require("./class/material.class");
const wood_strategy_class_1 = require("./class/wood-strategy.class");
class Main {
    static run() {
        const material = new material_class_1.Material();
        material.use(brick_strategy_class_1.BrickStrategy);
        material.use(wood_strategy_class_1.WoodStrategy);
    }
}
Main.run();
