import { IVisitor } from "../interfaces/visitor.interface";
import { File } from "./file.class";
import { Folder } from "./folder.class";

export class PrintInfoVisitor implements IVisitor {
    visitFile(file: File): void {
        console.log(`Visited File: ${file["name"]}`);
    }

    visitFolder(folder: Folder): void {
        console.log(`Visited Folder: ${folder["name"]}`);
    };
}