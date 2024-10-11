"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const visit_facade_class_1 = require("./class/visit-facade.class");
class Main {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            const visitFacade = new visit_facade_class_1.VisitFacade();
            const maxTickets = 10;
            console.log("\x1b[31m%s\x1b[0m", "Welcome to the zoo!\n");
            yield Main.sleep(1000);
            visitFacade.handleOpenFarm();
            yield Main.sleep(1000);
            visitFacade.handleOpenZoo(maxTickets);
            yield Main.sleep(maxTickets * 1100);
            visitFacade.handleCloseZoo();
        });
    }
    static sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
Main.run();
