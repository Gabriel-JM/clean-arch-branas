import { Coupon } from './coupon';
import { CPF } from './cpf'
import { Item } from './item';
import { OrderItem } from './order-item';

export class Order {
  private readonly cpf: CPF
  private readonly orderItems: OrderItem[] = []
  private coupon?: Coupon
  private freight = 0

  constructor(cpf: string, readonly date: Date = new Date()) {
    this.cpf = new CPF(cpf);
  }

  addItem(item: Item, quantity: number) {
    const volume = item.width/100 * item.height/100 * item.length/100
    const density = item.weight / volume
    const freight = 1000 * volume * (density/100)

    this.freight += freight * quantity
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

    return total
  }
}
