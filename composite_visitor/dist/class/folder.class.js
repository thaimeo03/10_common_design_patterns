"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
class Folder {
    constructor(name) {
        this.name = name;
        this.intent = "";
        this.children = [];
    }
    addIntent(intent) {
        this.intent += intent;
    }
    addChild(child) {
        child.addIntent(this.intent + "----");
        this.children.push(child);
    }
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }
    showPath() {
        console.log(`${this.intent}${this.name}`);
        for (const child of this.children) {
            child.showPath();
        }
    }
    accept(visitor) {
        visitor.visitFolder(this);
        for (const child of this.children) {
            child.accept(visitor);
        }
    }
}
exports.Folder = Folder;
