import { OrderItem } from '../src/order-item'

test('should create an order item', () => {
  const orderItem = new OrderItem(1, 1000, 10)

  expect(orderItem.getTotal()).toBe(10_000)
})
