import { Coupon } from './coupon';
import { CPF } from './cpf'
import { DefaultFreightCalculator } from './default-freight-calculator'
import { FreightCalculator } from './freight-calculator'
import { Item } from './item';
import { OrderItem } from './order-item';

export class Order {
  private readonly cpf: CPF
  private readonly orderItems: OrderItem[] = []
  private coupon?: Coupon
  private freight = 0

  constructor(
    cpf: string,
    readonly date: Date = new Date(),
    readonly freightCalculator: FreightCalculator = new DefaultFreightCalculator(),
  ) {
    this.cpf = new CPF(cpf);
  }

  addItem(item: Item, quantity: number) {
    this.freight += this.freightCalculator.calculate(item) * quantity
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.date)) return 
    
    this.coupon = coupon
  }

  getFreight() {
    return this.freight
  }

  getTotal() {
    let total = 0

    for (const item of this.orderItems) {
      total += item.price * item.quantity
    }

    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total, this.date)
    }

    total += this.getFreight()
    return total
  }
}
