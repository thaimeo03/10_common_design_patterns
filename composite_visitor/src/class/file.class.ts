import { IComponent } from "../interfaces/component.interface";
import { IVisitor } from "../interfaces/visitor.interface";

export class File implements IComponent {
  private name: string;
  private intent: string;

  constructor(name: string) {
    this.name = name;
    this.intent = "";
  }

  addIntent(intent: string): void {
    this.intent += intent;
  }

  showPath(): void {
    console.log(`${this.intent}${this.name}`);
  }

  accept(visitor: IVisitor): void {
    visitor.visitFile(this);
  }
}