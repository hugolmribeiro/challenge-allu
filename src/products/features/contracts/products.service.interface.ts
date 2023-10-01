import { Product } from '../entities/product.entity';

export interface IProductsService {
  findAll(search: string, orderBy: string, order: string): Promise<Product[]>;
  findById(id: number): Promise<Product>;
  findByCode(code: string): Promise<Product>;
}
