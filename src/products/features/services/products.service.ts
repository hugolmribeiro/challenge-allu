import { Inject, Injectable } from '@nestjs/common';
import { IProductsService } from '../contracts/products.service.interface';
import { IProductsRepository } from '../contracts/products.repository.interface';
import { Product } from '../entities/product.entity';
import { OrderBy } from '@/common/utils/models/order-by.interface';

@Injectable()
export class ProductsService implements IProductsService {
  constructor(
    @Inject('IProductsRepository')
    private readonly usersRepository: IProductsRepository,
  ) {}
  async findAll(
    search: string,
    orderBy = 'price',
    order = 'asc',
  ): Promise<Product[]> {
    const ordenation: OrderBy = {
      column: orderBy,
      order: order,
    };
    return this.usersRepository.findAll(search, ordenation);
  }

  async findById(id: number): Promise<Product | null> {
    return this.usersRepository.findById(id);
  }

  async findByCode(code: string): Promise<Product | null> {
    return this.usersRepository.findByCode(code);
  }
}
