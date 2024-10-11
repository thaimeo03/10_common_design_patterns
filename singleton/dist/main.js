"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food1_class_1 = require("./class/food1.class");
const food2_class_1 = require("./class/food2.class");
class Main {
    static run() {
        const food1 = new food1_class_1.Food1();
        food1.addFood(1, 'Apple');
        food1.addFood(2, 'Orange');
        const food2 = new food2_class_1.Food2();
        food2.addFood(4, 'Chicken');
        food2.addFood(5, 'Water');
        food1.farm.showFood();
        food2.farm.showFood();
    }
}
Main.run();
