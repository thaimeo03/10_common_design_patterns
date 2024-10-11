"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
class DataController {
    constructor() {
        this.observers = new Set();
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    subscribe(observer) {
        this.observers.add(observer);
    }
    unSubscribe(observer) {
        this.observers.delete(observer);
    }
    notify(data) {
        for (const observer of this.observers) {
            observer.notify(data);
        }
    }
}
exports.DataController = DataController;
