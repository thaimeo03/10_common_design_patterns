import { IUseMaterial } from "../interfaces/use-material.interface";

export class BrickStrategy implements IUseMaterial {
    use(): void {
        console.log("Using brick");
    }
}