import { IFarmIterator } from "../interfaces/farm-iterator.interface";
import { IFarm } from "../interfaces/farm.interface";

export class FarmIterator implements IFarmIterator {
    private index: number;
    private farms: IFarm[];

    constructor(farms: IFarm[]) {
        this.farms = farms;
        this.index = 0;
    }

    hasNext(): boolean {
        return this.index < this.farms.length
    }

    next(): IFarm {
        return this.farms[this.index++];
    }
}