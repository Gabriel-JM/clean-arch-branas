import { Order } from '../../domain/entities/order'
import { ItemRepository } from '../../domain/repositories/item-repository'
import { PlaceOrderInput } from './place-order-input'
import { PlaceOrderOutput } from './place-order-output'

export class PlaceOrder {
  constructor(private readonly itemRepository: ItemRepository) {}
  
  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf, input.date)

    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem)
      order.addItem(item, orderItem.quantity)
    }

    return new PlaceOrderOutput(1000)
  }
}
