import { File } from "../class/file.class";
import { Folder } from "../class/folder.class";

export interface IVisitor {
    visitFile(file: File): void;
    visitFolder(folder: Folder): void;
}