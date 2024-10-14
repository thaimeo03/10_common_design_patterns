import { FoodCompanyProvider } from "./class/food-company-provider.class";
import { IAbstractCompanyProvider } from "./interfaces/abstract-food-production-machine.interface";
import { IFoodMachine } from "./interfaces/food-machine.interface";

class Main {
  static run() {
    let foodCompany: IAbstractCompanyProvider = FoodCompanyProvider.getFoodCompany("A");
    let foodMachine: IFoodMachine | null = foodCompany.createMachine("cat")
    if(!foodMachine) {
      console.log("Food machine not found in company A");
      return;
    };
    foodMachine.mixIngredients(["meat", "fish", "milk"]);

    foodCompany = FoodCompanyProvider.getFoodCompany("B");
    foodMachine = foodCompany.createMachine("cow");
    if(!foodMachine) {
      console.log("Food machine not found in company B");
      return;
    }
    foodMachine.mixIngredients(["grass"]);

    foodCompany = FoodCompanyProvider.getFoodCompany("A");
    foodMachine = foodCompany.createMachine("cow");
    if(!foodMachine) {
      console.log("Food machine not found in company A");
      return;
    }
    foodMachine.mixIngredients(["meat", "milk", "fish"]);
  }
}

Main.run();