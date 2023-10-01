import { Product as PrismaProduct } from '@prisma/client';
import { Product as ProductEntity } from '../../entities/product.entity';

export class PrismaProductMapper {
  toDomain(prismaProduct: PrismaProduct): ProductEntity {
    return new ProductEntity(
      prismaProduct.id,
      prismaProduct.code,
      prismaProduct.name,
      prismaProduct.price,
      prismaProduct.description,
      prismaProduct.image,
    );
  }
}
