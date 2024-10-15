import { IFarm } from "../interfaces/farm.interface";

export class Farm implements IFarm {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    displayName(): void {
        console.log(this.name)
    }
}