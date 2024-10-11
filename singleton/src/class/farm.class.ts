export class Farm {
  static instance: Farm;
  private food: Map<number, string> = new Map();

  constructor() {
    if(Farm.instance) {
      return Farm.instance
    }
    Farm.instance = this;
  }

  addFood(key: number, value: string) {
    this.food.set(key, value);
  }

  showFood() {
    console.log('------------Food List------------')
        for (const [k, val] of this.food) {
            console.log(`|\t${k}\t|\t${val}\t|`)
        }
    console.log()
  }
}