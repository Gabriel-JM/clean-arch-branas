import { FreightCalculator } from './freight-calculator'
import { Item } from './item'

export class DefaultFreightCalculator implements FreightCalculator {
  calculate(item: Item) {
    const freight = 1000 * item.getVolume() * (item.getDensity()/100)
    const minFreight = 10
    return Math.max(minFreight, freight)
  }
}
