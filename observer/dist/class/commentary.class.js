"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commentary = void 0;
class Commentary {
    constructor(observers, subjectDe) {
        this.observers = observers;
        this.subjectDe = subjectDe;
        this.desc = "";
    }
    subscribeObserver(observer) {
        this.observers.push(observer);
    }
    unSubscribeObserver(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    notifyObservers() {
        console.log();
        for (const observer of this.observers) {
            observer.update(this.desc);
        }
    }
    setDesc(desc) {
        this.desc = desc;
        this.notifyObservers();
    }
    subjectDetails() {
        return this.subjectDe;
    }
}
exports.Commentary = Commentary;
