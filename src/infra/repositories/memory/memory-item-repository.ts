import { Item } from '../../../domain/entities/item'
import { ItemRepository } from '../../../domain/repositories/item-repository'

export class MemoryItemRepository implements ItemRepository {
  items: Array<Item> = [
    new Item(1, 'Música', 'CD', 30),
    new Item(2, 'Vídeo', 'DVD', 50),
    new Item(3, 'Vídeo', 'VHS', 10),
    new Item(4, 'Instrumentos musicais', 'Guitarra', 1000, 100, 30, 10, 3),
    new Item(5, 'Instrumentos musicais', 'Amplificador', 5000, 100, 50, 50, 20),
    new Item(6, 'Acessórios', 'Cabo', 30, 10, 10, 10, 0.9)
  ]
  
  findById(idItem: number): Promise<Item | undefined> {
    const item = this.items.find(item => item.idItem === idItem)

    return Promise.resolve(item)
  }

}
