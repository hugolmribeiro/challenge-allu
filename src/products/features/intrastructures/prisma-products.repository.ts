import { PrismaService } from '@/common/framework/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaProductMapper } from './mappers/prisma-product.mapper';
import { IProductsRepository } from '../contracts/products.repository.interface';
import { OrderBy } from '@/common/utils/models/order-by.interface';
import { Product as ProductEntity } from '../entities/product.entity';

@Injectable()
export class PrismaProductsRepository implements IProductsRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: PrismaProductMapper,
  ) {}

  public async findAll(
    search: string,
    orderBy: OrderBy,
  ): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany({
      where: {
        name: {
          contains: search ?? '',
          mode: 'insensitive',
        },
      },
      orderBy: {
        [orderBy.column]: orderBy.order,
      },
    });
    return products.map((product) => this.mapper.toDomain(product));
  }

  public async findById(id: number): Promise<ProductEntity | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    return this.mapper.toDomain(product);
  }

  public async findByCode(code: string): Promise<ProductEntity | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        code,
      },
    });

    return this.mapper.toDomain(product);
  }
}
