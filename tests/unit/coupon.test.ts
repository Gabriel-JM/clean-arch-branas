import { Coupon } from '../../src/domain/entities/coupon'

test('should create a valid discount coupon', () => {
  const coupon = new Coupon('VALE20', 20, new Date('2021-12-10'))
  const today = new Date('2021-12-01')

  const isValid = coupon.isValid(today)

  expect(isValid).toBe(true)
})

test('should create an expired discount coupon', () => {
  const coupon = new Coupon('VALE20', 20, new Date('2021-03-01'))
  const today = new Date('2021-12-01')

  const isExpired = coupon.isExpired(today)

  expect(isExpired).toBe(true)
})

test('should create a valid discount coupon and calculate discount', () => {
  const coupon = new Coupon('VALE20', 20)
  const discount = coupon.calculateDiscount(1000)

  expect(discount).toBe(200)
})
