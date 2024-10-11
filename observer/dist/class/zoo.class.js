"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
// Singleton
class Zoo {
    constructor() {
        this.observers = [];
        if (Zoo.instance) {
            return Zoo.instance;
        }
        Zoo.instance = this;
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unSubscribe(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    notify(data) {
        for (const observer of this.observers) {
            observer.notify(data);
        }
    }
}
exports.Zoo = Zoo;
