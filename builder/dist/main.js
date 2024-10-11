"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const farm_a_director_class_1 = require("./class/farm-a-director.class");
const farm_b_director_class_1 = require("./class/farm-b-director.class");
class Main {
    static run() {
        const farmA = farm_a_director_class_1.FarmADirector.construct();
        const farmB = farm_b_director_class_1.FarmBDirector.construct();
        console.log(farmA.build());
        console.log(farmB.build());
    }
}
Main.run();
