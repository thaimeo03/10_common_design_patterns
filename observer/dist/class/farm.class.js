"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farm = void 0;
const zoo_class_1 = require("./zoo.class");
class Farm {
    constructor(id) {
        this.id = id;
        this.observers = [];
        this.zoo = new zoo_class_1.Zoo();
        this.zoo.subscribe(this);
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unSubscribe(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    notify(data) {
        for (const observer of this.observers) {
            observer.notify(this.id, data);
        }
    }
}
exports.Farm = Farm;
