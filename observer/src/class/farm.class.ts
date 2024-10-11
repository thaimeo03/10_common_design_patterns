import { IFarmObservable } from "../interfaces/farm.interface";
import { IVisitorObserver } from "../interfaces/visitor.interface";
import { IZooObservable } from "../interfaces/zoo.interface";
import { Zoo } from "./zoo.class";

export class Farm implements IFarmObservable {
  private id: number;
  observers: IVisitorObserver[];
  zoo: IZooObservable;

  constructor(id: number) {
    this.id = id;
    this.observers = [];
    this.zoo = new Zoo();
    this.zoo.subscribe(this);
  }

  subscribe(observer: IVisitorObserver): void {
    this.observers.push(observer);
  }

  unSubscribe(observer: IVisitorObserver): void {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  notify(data: string): void {
    for (const observer of this.observers) {
      observer.notify(this.id, data);
    }
  }
} 