import { Order as PrismaOrder } from '@prisma/client';
import { Order as OrderEntity } from '../../entities/order.entity';

export class PrismaOrderMapper {
  public toPrisma(order: OrderEntity) {
    return {
      userId: order.userId,
      productId: order.productId,
      status: order.status,
      value: order.value,
      document: order.document,
      payment: order.payment,
      createdAt: order.createdAt,
    };
  }
  public toDomain(prismaOrder: PrismaOrder): OrderEntity {
    return new OrderEntity(
      prismaOrder.id,
      prismaOrder.userId,
      prismaOrder.productId,
      prismaOrder.value,
      prismaOrder.status,
      prismaOrder.document,
      prismaOrder.payment,
      prismaOrder.createdAt,
    );
  }
}
