import { IFarmObservable } from "./farm.interface";

export interface IZooObservable {
  subscribe(observer: IFarmObservable): void;
  unSubscribe(observer: IFarmObservable): void;
  notify(data: string): void;
}