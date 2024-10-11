export class Zoo {
  open() {
    console.log("\x1b[35m%s\x1b[0m", '\nOpening Zoo');
  }

  close() {
    console.log("\x1b[35m%s\x1b[0m", '\nClosing Zoo\n');
  }
}