import { File } from "./class/file.class";
import { Folder } from "./class/folder.class";

class Main {
  static run() {
    const folderA = new Folder("FolderA");
    const fileA = new File("fileA.txt");
    const folderB = new Folder("FolderB");
    const fileB = new File("fileB.txt");
    const folderC = new Folder("FolderC");
    const folderD = new Folder("FolderD");

    folderA.addChild(fileA);
    folderA.addChild(folderB);

    folderB.addChild(fileB);
    folderB.addChild(folderC);

    folderA.addChild(folderD);

    folderA.showPath();
  }
}

Main.run();