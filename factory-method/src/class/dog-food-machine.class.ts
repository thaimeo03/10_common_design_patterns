import { IFood } from "../interfaces/food.interface";
import { DogFood } from "./dog-food.class";
import { FoodMachine } from "./food-machine.class";

export class DogFoodMachine extends FoodMachine {
    getFood(): IFood {
        return new DogFood();
    }
}