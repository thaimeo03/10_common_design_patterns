export class TicketResource {

  create(maxQuantity: number) {
    console.log(`\nCreating Ticket ...`);
    let counter = maxQuantity
    const interval = setInterval(() => {
      if (counter > 0) {
        console.log(`Creating Ticket number ${maxQuantity - counter + 1}`);
        counter--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}