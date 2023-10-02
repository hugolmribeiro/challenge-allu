import { Module } from '@nestjs/common';
import { OrdersService } from './features/services/orders.service';
import { OrdersController } from './http/controllers/orders.controller';
import { PrismaModule } from '@/common/framework/prisma/prisma.module';
import { PrismaOrdersRepository } from './features/infrastructures/prisma-orders.repository';
import { PrismaOrderMapper } from './features/infrastructures/mappers/prisma-order.mapper';
import { MulterConfigModule } from '@/common/framework/multer/multer.module';

@Module({
  controllers: [OrdersController],
  providers: [
    {
      provide: 'IOrdersService',
      useClass: OrdersService,
    },
    {
      provide: 'IOrdersRepository',
      useClass: PrismaOrdersRepository,
    },
    PrismaOrderMapper,
  ],
  imports: [PrismaModule, MulterConfigModule],
  exports: ['IOrdersService'],
})
export class OrdersModule {}
