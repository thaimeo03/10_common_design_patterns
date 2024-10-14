import { IUseMaterial } from "../interfaces/use-material.interface";

export class WoodStrategy implements IUseMaterial {
    use(): void {
        console.log("Using wood");
    }
}