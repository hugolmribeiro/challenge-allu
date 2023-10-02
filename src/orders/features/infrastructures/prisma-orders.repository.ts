import { Injectable } from '@nestjs/common';
import { IOrdersRepository } from '../contracts/orders.repository.interface';
import { PrismaService } from '@/common/framework/prisma/prisma.service';
import { PrismaOrderMapper } from './mappers/prisma-order.mapper';
import { Order } from '../entities/order.entity';

@Injectable()
export class PrismaOrdersRepository implements IOrdersRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: PrismaOrderMapper,
  ) {}

  public async store(order: Order): Promise<Order> {
    const createdOrder = await this.prisma.order.create({
      data: {
        ...this.mapper.toPrisma(order),
      },
    });
    return this.mapper.toDomain(createdOrder);
  }

  public async findUserOrders(userId: number): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        userId,
      },
    });
    return orders.map((order) => this.mapper.toDomain(order));
  }

  public async updateStatus(id: number, newStatus: number): Promise<Order> {
    const updatedOrder = await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        status: newStatus,
      },
    });
    return this.mapper.toDomain(updatedOrder);
  }
}
