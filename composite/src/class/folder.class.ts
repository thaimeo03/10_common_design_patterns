import { IComponent } from "../interfaces/component.interface";

export class Folder implements IComponent {
  private name: string;
  private intent: string;
  private children: IComponent[];

  constructor(name: string) {
    this.name = name;
    this.intent = "";
    this.children = [];
  }

  addIntent(intent: string): void {
    this.intent += intent;
  }

  addChild(child: IComponent): void {
    child.addIntent(this.intent + "----");
    this.children.push(child);
  }

  removeChild(child: IComponent): void {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  showPath(): void {
    console.log(`${this.intent}${this.name}`);
    for (const child of this.children) {
        child.showPath();
    }
  }
}