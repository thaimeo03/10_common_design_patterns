import { IFood } from "../interfaces/food.interface";
import { CatFood } from "./cat-food.class";
import { FoodMachine } from "./food-machine.class";

export class CatFoodMachine extends FoodMachine {
    getFood(): IFood {
        return new CatFood();
    }
}