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
}
