"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farm = void 0;
class Farm {
    constructor() {
        this.food = new Map();
        if (Farm.instance) {
            return Farm.instance;
        }
        Farm.instance = this;
    }
    addFood(key, value) {
        this.food.set(key, value);
    }
    showFood() {
        console.log('------------Food List------------');
        for (const [k, val] of this.food) {
            console.log(`|\t${k}\t|\t${val}\t|`);
        }
        console.log();
    }
}
exports.Farm = Farm;
