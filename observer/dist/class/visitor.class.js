"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitor = void 0;
class Visitor {
    constructor(name, farm) {
        this.name = name;
        this.farm = farm;
        this.farm.subscribe(this);
    }
    notify(id, data) {
        console.log(`[Farm with id: ${id} - ${this.name}]: ${data}`);
    }
    delete() {
        this.farm.unSubscribe(this);
    }
}
exports.Visitor = Visitor;
