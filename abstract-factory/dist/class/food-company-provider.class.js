"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCompanyProvider = void 0;
const food_machine_company_a_class_1 = require("./food-machine-company-a.class");
const food_machine_company_b_class_1 = require("./food-machine-company-b.class");
class FoodCompanyProvider {
    constructor() {
        throw new Error("Cannot create an instance this class.");
    }
    static getFoodCompany(name) {
        switch (name) {
            case "A":
                return new food_machine_company_a_class_1.FoodMachineCompanyA();
            case "B":
                return new food_machine_company_b_class_1.FoodMachineCompanyB();
            default:
                throw new Error("Invalid food company: " + name);
        }
    }
}
exports.FoodCompanyProvider = FoodCompanyProvider;
