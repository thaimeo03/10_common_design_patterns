"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmB = void 0;
class FarmB {
    open() {
        console.log("\x1b[36m%s\x1b[0m", 'Opening Farm B');
    }
    close() {
        console.log("\x1b[36m%s\x1b[0m", 'Closing Farm B');
    }
    provideMeat() {
        console.log("\x1b[36m%s\x1b[0m", 'Providing meat');
    }
}
exports.FarmB = FarmB;
