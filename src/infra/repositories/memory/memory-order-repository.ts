import { Order } from '../../../domain/entities/order'
import { OrderRepository } from '../../../domain/repositories/order-repository'

export class MemoryOrderRepository implements OrderRepository {
  orders: Array<Order> = []
  
  save(order: Order) {
    this.orders.push(order)
    return Promise.resolve()
  }
}
