export class Farm {
  type: string;
  width: number;
  height: number;
  fencesQuantity: number;

  constructor() {
    this.type = '';
    this.width = 0;
    this.height = 0;
    this.fencesQuantity = 0;
  }

  build(): string {
    return `Farm type: ${this.type}, land size: ${this.width}x${this.height}, fences quantity: ${this.fencesQuantity}`
  }
}