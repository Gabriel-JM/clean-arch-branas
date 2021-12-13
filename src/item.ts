export class Item {
  constructor(
    readonly idItem: number,
    readonly category: string,
    readonly description: string,
    readonly price: number,
    readonly width = 0,
    readonly height = 0,
    readonly length = 0,
    readonly weight = 0
  ) {}

  getVolume() {
    return this.width/100 * this.height/100 * this.length/100
  }

  getDensity() {
    return this.weight / this.getVolume()
  }

  calculateFreight() {
    
  }
}
