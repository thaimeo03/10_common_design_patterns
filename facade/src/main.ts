import { VisitFacade } from "./class/visit-facade.class";


class Main {
  static async run() {
    const visitFacade = new VisitFacade();
    const maxTickets = 10;

    console.log("\x1b[31m%s\x1b[0m", "Welcome to the zoo!\n");

    await Main.sleep(1000);
    
    visitFacade.handleOpenFarm();

    await Main.sleep(1000);

    visitFacade.handleOpenZoo(maxTickets);

    await Main.sleep(maxTickets * 1100);

    visitFacade.handleCloseZoo();
  }

  static sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

Main.run();