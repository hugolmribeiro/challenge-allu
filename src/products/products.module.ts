import { Module } from '@nestjs/common';
import { ProductsService } from './features/services/products.service';
import { ProductsController } from './http/controllers/products.controller';
import { PrismaModule } from '@/common/framework/prisma/prisma.module';
import { PrismaProductsRepository } from './features/intrastructures/prisma-products.repository';
import { PrismaProductMapper } from './features/intrastructures/mappers/prisma-product.mapper';

@Module({
  controllers: [ProductsController],
  providers: [
    {
      provide: 'IProductsService',
      useClass: ProductsService,
    },
    {
      provide: 'IProductsRepository',
      useClass: PrismaProductsRepository,
    },
    PrismaProductMapper,
  ],
  imports: [PrismaModule],
  exports: ['IProductsService'],
})
export class ProductsModule {}
