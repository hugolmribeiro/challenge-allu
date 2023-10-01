import { OrderBy } from '@/common/utils/models/order-by.interface';
import { Product as ProductEntity } from '../entities/product.entity';

export interface IProductsRepository {
  findAll(search: string, orderBy: OrderBy): Promise<ProductEntity[]>;
  findById(id: number): Promise<ProductEntity | null>;
  findByCode(code: string): Promise<ProductEntity | null>;
}
