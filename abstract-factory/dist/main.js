"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_company_provider_class_1 = require("./class/food-company-provider.class");
class Main {
    static run() {
        let foodCompany = food_company_provider_class_1.FoodCompanyProvider.getFoodCompany("A");
        let foodMachine = foodCompany.createMachine("cat");
        if (!foodMachine) {
            console.log("Food machine not found in company A");
            return;
        }
        ;
        foodMachine.mixIngredients(["meat", "fish", "milk"]);
        foodCompany = food_company_provider_class_1.FoodCompanyProvider.getFoodCompany("B");
        foodMachine = foodCompany.createMachine("cow");
        if (!foodMachine) {
            console.log("Food machine not found in company B");
            return;
        }
        foodMachine.mixIngredients(["grass"]);
        foodCompany = food_company_provider_class_1.FoodCompanyProvider.getFoodCompany("A");
        foodMachine = foodCompany.createMachine("cow");
        if (!foodMachine) {
            console.log("Food machine not found in company A");
            return;
        }
        foodMachine.mixIngredients(["meat", "milk", "fish"]);
    }
}
Main.run();
