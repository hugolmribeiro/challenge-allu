import { CreateOrderDto } from '@/orders/http/dto/create-order.dto';
import { Order } from '../entities/order.entity';
import { UpdateOrderStatusDto } from '@/orders/http/dto/update-order-status.dto';

export interface IOrdersService {
  create(userId: number, order: CreateOrderDto): Promise<Order>;
  findByUserId(userId: number): Promise<Order[]>;
  updateStatus(id: number, order: UpdateOrderStatusDto): Promise<Order>;
  uploadDocument(userId: number, document: any): Promise<string>;
}
