"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketResource = void 0;
class TicketResource {
    create(maxQuantity) {
        console.log(`\nCreating Ticket ...`);
        let counter = maxQuantity;
        const interval = setInterval(() => {
            if (counter > 0) {
                console.log(`Creating Ticket number ${maxQuantity - counter + 1}`);
                counter--;
            }
            else {
                clearInterval(interval);
            }
        }, 1000);
    }
}
exports.TicketResource = TicketResource;
