import { FarmA } from "./farm-a.class";
import { FarmB } from "./farm-b.class";
import { TicketResource } from "./ticket.class";
import { Zoo } from "./zoo.class";

export class VisitFacade {
  private readonly farmA: FarmA;
  private readonly farmB: FarmB;
  private readonly ticketResource: TicketResource;
  private readonly zoo: Zoo;

  constructor() {
    this.farmA = new FarmA();
    this.farmB = new FarmB();
    this.ticketResource = new TicketResource();
    this.zoo = new Zoo();
  }

  handleOpenFarm() {
    this.farmA.open();
    this.farmB.open();

    this.farmA.provideGrass();
    this.farmB.provideMeat();
  }

  handleOpenZoo(maxTickets: number) {
    this.zoo.open();
    this.ticketResource.create(maxTickets)
  }

  handleCloseZoo() {
    this.farmA.close();
    this.farmB.close();

    this.zoo.close();
  }
}