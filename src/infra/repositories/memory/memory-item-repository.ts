import { Item } from '../../../domain/entities/item'
import { ItemRepository } from '../../../domain/repositories/item-repository'

export class MemoryItemRepository implements ItemRepository {
  items: Array<Item> = [
    new Item(1, 'Música', 'CD', 30),
    new Item(2, 'Vídeo', 'DVD', 50),
    new Item(3, 'Vídeo', 'VHS', 10)
  ]
  
  findById(idItem: number): Promise<Item | undefined> {
    const item = this.items.find(item => item.idItem === idItem)

    return Promise.resolve(item)
  }

}
