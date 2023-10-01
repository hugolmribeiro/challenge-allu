import { Product as PrismaProduct } from '@prisma/client';
import { Product as ProductEntity } from '../../entities/product.entity';

export class PrismaProductMapper {
  toDomain(prismaProduct: PrismaProduct): ProductEntity {
    return new ProductEntity(
      prismaProduct.id,
      prismaProduct.name,
      prismaProduct.code,
      prismaProduct.price,
      prismaProduct.description,
      prismaProduct.image,
    );
  }
}
