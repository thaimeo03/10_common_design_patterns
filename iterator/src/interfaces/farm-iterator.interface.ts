import { IFarm } from "./farm.interface";

export interface IFarmIterator {
    next(): IFarm
    hasNext(): boolean
}