"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farm = void 0;
class Farm {
    constructor() {
        this.type = '';
        this.width = 0;
        this.height = 0;
        this.fencesQuantity = 0;
    }
    build() {
        return `Farm type: ${this.type}, land size: ${this.width}x${this.height}, fences quantity: ${this.fencesQuantity}`;
    }
}
exports.Farm = Farm;
