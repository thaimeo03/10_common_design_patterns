"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmIterator = void 0;
class FarmIterator {
    constructor(farms) {
        this.farms = farms;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.farms.length;
    }
    next() {
        return this.farms[this.index++];
    }
}
exports.FarmIterator = FarmIterator;
