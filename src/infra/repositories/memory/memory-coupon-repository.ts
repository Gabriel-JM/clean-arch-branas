import { Coupon } from '../../../domain/entities/coupon'
import { CouponRepository } from '../../../domain/repositories/coupon-repository'

export class MemoryCouponRepository implements CouponRepository {
  coupons: Array<Coupon> = [
    new Coupon('VALE20', 20)
  ]
  
  findByCode(code: string): Promise<Coupon | undefined> {
    const coupon = this.coupons.find(coupon => coupon.code === code)
    return Promise.resolve(coupon)
  }

}
