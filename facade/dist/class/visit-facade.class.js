"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitFacade = void 0;
const farm_a_class_1 = require("./farm-a.class");
const farm_b_class_1 = require("./farm-b.class");
const ticket_class_1 = require("./ticket.class");
const zoo_class_1 = require("./zoo.class");
class VisitFacade {
    constructor() {
        this.farmA = new farm_a_class_1.FarmA();
        this.farmB = new farm_b_class_1.FarmB();
        this.ticketResource = new ticket_class_1.TicketResource();
        this.zoo = new zoo_class_1.Zoo();
    }
    handleOpenFarm() {
        this.farmA.open();
        this.farmB.open();
        this.farmA.provideGrass();
        this.farmB.provideMeat();
    }
    handleOpenZoo(maxTickets) {
        this.zoo.open();
        this.ticketResource.create(maxTickets);
    }
    handleCloseZoo() {
        this.farmA.close();
        this.farmB.close();
        this.zoo.close();
    }
}
exports.VisitFacade = VisitFacade;
