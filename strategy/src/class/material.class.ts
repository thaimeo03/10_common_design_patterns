import { IMaterialStyleConstructor } from "../interfaces/material-style-constructor.interface";

export class Material {
    use(materialStyle: IMaterialStyleConstructor) {
        new materialStyle().use();
    }
}