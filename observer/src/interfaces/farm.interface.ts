import { IVisitorObserver } from "./visitor.interface";

export interface IFarmObservable {
  subscribe(observer: IVisitorObserver): void;
  unSubscribe(observer: IVisitorObserver): void;
  notify(data: string): void;
}