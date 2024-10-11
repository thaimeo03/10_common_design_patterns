export class FarmA {
  open() {
    console.log("\x1b[33m%s\x1b[0m", '\nOpening Farm A');
  }

  close() {
    console.log("\x1b[33m%s\x1b[0m", '\nClosing Farm A');
  }

  provideGrass() {
    console.log("\x1b[33m%s\x1b[0m", 'Providing grass');
  }
}