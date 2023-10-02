import { Inject, Injectable } from '@nestjs/common';
import { IOrdersService } from '../contracts/orders.service.interface';
import { IOrdersRepository } from '../contracts/orders.repository.interface';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '@/orders/http/dto/create-order.dto';
import { OrderStatuses } from '../enums/order-statuses.enum';
import { UpdateOrderStatusDto } from '@/orders/http/dto/update-order-status.dto';
import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

@Injectable()
export class OrdersService implements IOrdersService {
  constructor(
    @Inject('IOrdersRepository')
    private readonly usersRepository: IOrdersRepository,
  ) {}
  async create(userId: number, createOrderDto: CreateOrderDto): Promise<Order> {
    const user = new Order(
      null,
      userId,
      createOrderDto.productId,
      createOrderDto.value,
      OrderStatuses.PROCESSING,
      createOrderDto.document,
      createOrderDto.payment,
      new Date().toISOString(),
    );
    return this.usersRepository.store(user);
  }

  async findByUserId(userId: number): Promise<Order[]> {
    return this.usersRepository.findUserOrders(userId);
  }

  async updateStatus(id: number, order: UpdateOrderStatusDto): Promise<Order> {
    return this.usersRepository.updateStatus(id, order.status);
  }

  async uploadDocument(userId: number, document: any): Promise<string> {
    const fileName = `${new Date().getTime()}-${userId}-${
      document.originalname
    }`;
    const uploadDir = path.resolve('uploads/documents');

    const filePath = path.join(uploadDir, fileName);

    mkdirp(path.dirname(filePath))
      .then(() => {
        fs.writeFileSync(filePath, document.buffer);
      })
      .catch((err) => {
        console.log(err);
      });
    return filePath;
  }
}
