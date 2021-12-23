import { PlaceOrder } from '../../src/application/usecases/place-order'
import { MemoryCouponRepository } from '../../src/infra/repositories/memory/memory-coupon-repository'
import { MemoryItemRepository } from '../../src/infra/repositories/memory/memory-item-repository'
import { MemoryOrderRepository } from '../../src/infra/repositories/memory/memory-order-repository'

test('should place an order', async () => {
  const itemRepository = new MemoryItemRepository()
  const couponRepository = new MemoryCouponRepository()
  const orderRepository = new MemoryOrderRepository()
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository)
  const input = {
    cpf: '839.435.452-10',
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 }
    ],
    date: new Date('2021-12-10'),
    coupon: 'VALE20'
  }

  const output = await placeOrder.execute(input)

  expect(output.total).toBe(88)
})

test('should place an order with freight', async () => {
  const itemRepository = new MemoryItemRepository()
  const couponRepository = new MemoryCouponRepository()
  const orderRepository = new MemoryOrderRepository()
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository)
  const input = {
    cpf: '839.435.452-10',
    orderItems: [
      { idItem: 4, quantity: 1 },
      { idItem: 5, quantity: 1 },
      { idItem: 6, quantity: 3 }
    ],
    date: new Date('2021-12-10')
  }

  const output = await placeOrder.execute(input)

  expect(output.total).toBe(6350)
})
