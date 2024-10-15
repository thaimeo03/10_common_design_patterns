"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodMachineV2 = void 0;
const cat_food_class_1 = require("./cat-food.class");
const dog_food_class_1 = require("./dog-food.class");
class FoodMachineV2 {
    static selectAnimalFood(animal) {
        switch (animal) {
            case "cat":
                return new cat_food_class_1.CatFood();
            case "dog":
                return new dog_food_class_1.DogFood();
            default:
                throw new Error("Invalid animal");
        }
    }
}
exports.FoodMachineV2 = FoodMachineV2;
