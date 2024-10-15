"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const farm_iterator_class_1 = require("./class/farm-iterator.class");
const farm_class_1 = require("./class/farm.class");
class Main {
    static run() {
        const farms = [];
        farms.push(new farm_class_1.Farm("Farm 1"), new farm_class_1.Farm("Farm 2"), new farm_class_1.Farm("Farm 3"));
        const farmIterator = new farm_iterator_class_1.FarmIterator(farms);
        while (farmIterator.hasNext()) {
            farmIterator.next().displayName();
        }
    }
}
Main.run();
