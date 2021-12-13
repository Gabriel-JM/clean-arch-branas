import { Coupon } from '../src/coupon'
import { DefaultFreightCalculator } from '../src/default-freight-calculator'
import { FixedFreightCalculator } from '../src/fixed-freight-calculator'
import { Item } from '../src/item'
import { Order } from '../src/order'

test('should create an empty order with a valid CPF', () => {
  const cpf = '839.435.452-10'
  const order = new Order(cpf, new DefaultFreightCalculator())
  const total = order.getTotal()
  
  expect(total).toBe(0)
})

test('should try to create an empty order with an invalid CPF', () => {
  const cpf = '111.111.111-11'
  expect(() => new Order(cpf, new DefaultFreightCalculator())).toThrow(new Error('Invalid CPF'))
})

test('should create an order with 3 items', () => {
  const cpf = '839.435.452-10'
  const order = new Order(cpf, new DefaultFreightCalculator())
  order.addItem(new Item(1, 'Música', 'CD', 30), 3)
  order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1)
  order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2)
  
  const total = order.getTotal()
  
  expect(total).toBe(160)
})

test('should create an order with 3 items and a discount coupon', () => {
  const cpf = '839.435.452-10'
  const order = new Order(cpf, new DefaultFreightCalculator())
  order.addItem(new Item(1, 'Música', 'CD', 30), 3)
  order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1)
  order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2)
  order.addCoupon(new Coupon('VALE20', 20))
  
  const total = order.getTotal()
  
  expect(total).toBe(128)
})

test('should create an order with 3 items and an expired discount coupon with default strategy', () => {
  const cpf = '839.435.452-10'
  const order = new Order(cpf, new DefaultFreightCalculator(), new Date('2021-12-10'))
  order.addItem(new Item(1, 'Música', 'CD', 30), 3)
  order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1)
  order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2)
  order.addCoupon(new Coupon('VALE20', 20, new Date('2021-12-01')))
  
  const total = order.getTotal()
  
  expect(total).toBe(160)
})

test('should create an order with 3 items with calculated freight with fixed strategy', () => {
  const cpf = '839.435.452-10'
  const order = new Order(cpf, new FixedFreightCalculator())
  order.addItem(new Item(4, 'Instrumentos musicais', 'Guitarra', 1000, 100, 30, 10, 3), 1)
  order.addItem(new Item(5, 'Instrumentos musicais', 'Amplificador', 5000, 100, 50, 50, 20), 1)
  order.addItem(new Item(6, 'Acessórios', 'Cabo', 30, 10, 10, 10, 0.9), 3)
  
  const freight = order.getFreight()
  
  expect(freight).toBe(50)
})
