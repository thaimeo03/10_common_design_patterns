"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintInfoVisitor = void 0;
class PrintInfoVisitor {
    visitFile(file) {
        console.log(`Visited File: ${file["name"]}`);
    }
    visitFolder(folder) {
        console.log(`Visited Folder: ${folder["name"]}`);
    }
    ;
}
exports.PrintInfoVisitor = PrintInfoVisitor;
