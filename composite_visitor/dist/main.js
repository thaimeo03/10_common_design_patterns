"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_class_1 = require("./class/file.class");
const folder_class_1 = require("./class/folder.class");
const print_info_vistitor_class_1 = require("./class/print-info-vistitor.class");
class Main {
    static run() {
        const folderA = new folder_class_1.Folder("FolderA");
        const fileA = new file_class_1.File("fileA.txt");
        const folderB = new folder_class_1.Folder("FolderB");
        const fileB = new file_class_1.File("fileB.txt");
        const folderC = new folder_class_1.Folder("FolderC");
        const folderD = new folder_class_1.Folder("FolderD");
        folderA.addChild(fileA);
        folderA.addChild(folderB);
        folderB.addChild(fileB);
        folderB.addChild(folderC);
        folderA.addChild(folderD);
        folderA.showPath();
        // Adding a visitor
        console.log("\nAdding a visitor");
        const visitor = new print_info_vistitor_class_1.PrintInfoVisitor();
        folderB.accept(visitor);
    }
}
Main.run();