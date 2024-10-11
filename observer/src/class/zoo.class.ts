import { IFarmObservable } from "../interfaces/farm.interface";
import { IZooObservable } from "../interfaces/zoo.interface";

// Singleton
export class Zoo implements IZooObservable {
  static instance: Zoo;
  observers: IFarmObservable[] = [];

  constructor() {
    if(Zoo.instance) {
      return Zoo.instance;
    }
    Zoo.instance = this;
  }

  subscribe(observer: IFarmObservable): void {
    this.observers.push(observer);
  }

  unSubscribe(observer: IFarmObservable): void {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  notify(data: string): void {
    for (const observer of this.observers) {
      observer.notify(data);
    }
  }
}