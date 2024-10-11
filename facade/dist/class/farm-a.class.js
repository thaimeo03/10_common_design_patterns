"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmA = void 0;
class FarmA {
    open() {
        console.log("\x1b[33m%s\x1b[0m", '\nOpening Farm A');
    }
    close() {
        console.log("\x1b[33m%s\x1b[0m", '\nClosing Farm A');
    }
    provideGrass() {
        console.log("\x1b[33m%s\x1b[0m", 'Providing grass');
    }
}
exports.FarmA = FarmA;
