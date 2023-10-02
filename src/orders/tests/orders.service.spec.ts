import { Test, TestingModule } from '@nestjs/testing';
import { IOrdersRepository } from '../features/contracts/orders.repository.interface';
import { IOrdersService } from '../features/contracts/orders.service.interface';
import { Order } from '../features/entities/order.entity';
import { OrdersService } from '../features/services/orders.service';
import { OrderStatuses } from '../features/enums/order-statuses.enum';
import { CreateOrderDto } from '../http/dto/create-order.dto';

describe('OrdersService', () => {
  let service: IOrdersService;
  let repository: IOrdersRepository;
  let resultOrder: Order;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: 'IOrdersService', useClass: OrdersService },
        {
          provide: 'IOrdersRepository',
          useFactory: () => ({
            store: jest.fn(),
            findUserOrders: jest.fn(),
            updateStatus: jest.fn(),
          }),
        },
      ],
    }).compile();
    service = module.get<IOrdersService>('IOrdersService');
    repository = module.get<IOrdersRepository>('IOrdersRepository');

    resultOrder = new Order(
      1,
      1,
      2,
      1999.99,
      OrderStatuses.PROCESSING,
      'test',
      'credit_card',
      new Date().toISOString(),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a order', async () => {
      const orderToCreate: CreateOrderDto = {
        productId: 1,
        value: 1999.99,
        document: 'test',
        payment: 'credit_card',
      };
      const order = new Order(
        null,
        1,
        1,
        1999.99,
        OrderStatuses.PROCESSING,
        'test',
        'credit_card',
        new Date().toISOString(),
      );

      jest.spyOn(repository, 'store').mockResolvedValue(resultOrder);

      const result = await service.create(1, orderToCreate);
      expect(repository.store).toHaveBeenCalledWith(order);

      expect(result).toEqual(resultOrder);
    });
  });

  describe('findByUserId', () => {
    it('should find a user orders', async () => {
      jest.spyOn(repository, 'findUserOrders').mockResolvedValue([resultOrder]);
      const result = await service.findByUserId(1);
      expect(repository.findUserOrders).toHaveBeenCalledWith(1);
      expect(result).toEqual([resultOrder]);
    });
  });

  describe('updateStatus', () => {
    it('should update a order status', async () => {
      jest.spyOn(repository, 'updateStatus').mockResolvedValue(resultOrder);
      const result = await service.updateStatus(1, { status: 1 });
      expect(repository.updateStatus).toHaveBeenCalledWith(1, 1);
      expect(result).toEqual(resultOrder);
    });
  });
});
