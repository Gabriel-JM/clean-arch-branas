import { Item } from '../entities/item'

export interface ItemRepository {
  findById(idItem: number): Promise<Item>
}
