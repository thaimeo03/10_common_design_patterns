import { IFarmObservable } from "../interfaces/farm.interface";
import { IVisitorObserver } from "../interfaces/visitor.interface";

export class Visitor implements IVisitorObserver {
  name: string;
  farm: IFarmObservable;

  constructor(name: string, farm: IFarmObservable) {
    this.name = name;
    this.farm = farm;
    this.farm.subscribe(this);
  }

  notify(id: number, data: string): void {
    console.log(`[Farm with id: ${id} - ${this.name}]: ${data}`);
  }

  delete(): void {
    this.farm.unSubscribe(this);
  }
}