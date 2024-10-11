"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const farm_class_1 = require("./class/farm.class");
const visitor_class_1 = require("./class/visitor.class");
const zoo_class_1 = require("./class/zoo.class");
class Main {
    static run() {
        const zoo = new zoo_class_1.Zoo();
        const farm1 = new farm_class_1.Farm(1);
        const farm2 = new farm_class_1.Farm(2);
        const visitor1 = new visitor_class_1.Visitor("John", farm1);
        const visitor2 = new visitor_class_1.Visitor("Mary", farm2);
        const visitor3 = new visitor_class_1.Visitor("Tom", farm1);
        zoo.notify("Welcome to the Zoo!");
        console.log();
        zoo.notify("We have a new visitor: " + visitor1.name);
        console.log();
        zoo.notify("We have a new visitor: " + visitor2.name);
        console.log();
        zoo.notify("We have a new visitor: " + visitor3.name);
        visitor2.delete();
        console.log();
        zoo.notify("Opening farm 1");
    }
}
Main.run();
