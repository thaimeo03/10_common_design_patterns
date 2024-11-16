"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
class File {
    constructor(name) {
        this.name = name;
        this.intent = "";
    }
    addIntent(intent) {
        this.intent += intent;
    }
    showPath() {
        console.log(`${this.intent}${this.name}`);
    }
    accept(visitor) {
        visitor.visitFile(this);
    }
}
exports.File = File;
