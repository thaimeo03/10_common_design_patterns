"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodMachineCompanyA = void 0;
const cat_food_company_a_class_1 = require("./cat-food-company-a.class");
const dog_food_company_a_class_1 = require("./dog-food-company-a.class");
class FoodMachineCompanyA {
    createMachine(animal) {
        switch (animal) {
            case "cat":
                return new cat_food_company_a_class_1.CatFoodCompanyA();
            case "dog":
                return new dog_food_company_a_class_1.DogFoodCompanyA();
            default:
                return null;
        }
    }
}
exports.FoodMachineCompanyA = FoodMachineCompanyA;
