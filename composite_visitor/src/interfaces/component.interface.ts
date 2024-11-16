import { IVisitor } from "./visitor.interface";

export interface IComponent {
  showPath(): void;
  addIntent(intent: string): void;
  accept(visitor: IVisitor): void;
}