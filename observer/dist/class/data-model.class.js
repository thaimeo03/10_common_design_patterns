"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const data_controller_class_1 = require("./data-controller.class");
class DataModel {
    constructor() {
        this.observers = new Map();
        this.dataController = new data_controller_class_1.DataController();
        this.dataController.subscribe(this);
        this.counter = 0;
    }
    subscribe(observer) {
        this.counter++;
        this.observers.set(this.counter, observer);
        return this.counter;
    }
    unSubscribe(observerId) {
        this.observers.delete(observerId);
    }
    notify(data) {
        for (const observer of this.observers.values()) {
            observer.notify(data);
        }
    }
}
exports.DataModel = DataModel;
