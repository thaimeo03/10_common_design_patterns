"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodMachineCompanyB = void 0;
const cow_food_company_b_class_1 = require("./cow-food-company-b.class");
class FoodMachineCompanyB {
    createMachine(animal) {
        switch (animal) {
            case "cow":
                return new cow_food_company_b_class_1.CowFoodCompanyB();
            default:
                return null;
        }
    }
}
exports.FoodMachineCompanyB = FoodMachineCompanyB;
