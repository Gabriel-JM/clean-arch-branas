import { FreightCalculator } from './freight-calculator'

export class FixedFreightCalculator implements FreightCalculator {
  calculate(): number {
    return 10
  }
}
