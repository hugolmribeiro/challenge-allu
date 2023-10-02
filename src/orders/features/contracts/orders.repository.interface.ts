import { Order as OrderEntity } from '../entities/order.entity';

export interface IOrdersRepository {
  store(order: OrderEntity): Promise<OrderEntity>;
  findUserOrders(userId: number): Promise<OrderEntity[]>;
  updateStatus(id: number, newStatus: number): Promise<OrderEntity>;
}
