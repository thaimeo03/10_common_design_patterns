import { IComponent } from "../interfaces/component.interface";

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
}