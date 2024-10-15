import { IFood } from "../interfaces/food.interface";
import { CatFood } from "./cat-food.class";
import { DogFood } from "./dog-food.class";

export class FoodMachineV2 {
    static selectAnimalFood(animal: string): IFood {
        switch (animal) {
            case "cat":
                return new CatFood();
            case "dog":
                return new DogFood();
            default:
                throw new Error("Invalid animal");
        }
    }
}