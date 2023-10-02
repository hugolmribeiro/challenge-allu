import { Order } from '../features/entities/order.entity';
import { OrderStatuses } from '../features/enums/order-statuses.enum';

describe('Order', () => {
  const order = new Order(
    1,
    1,
    2,
    1999.99,
    OrderStatuses.PROCESSING,
    'test',
    'credit_card',
    new Date().toISOString(),
  );

  it('should be able to create a order', () => {
    expect(order).toBeDefined();
  });

  it('should be able to set and get a order id', () => {
    order.id = 2;
    expect(order.id).toBe(2);
  });

  it('should be able to set and get a order userId', () => {
    order.userId = 123;
    expect(order.userId).toBe(123);
  });

  it('should be able to set and get a order productId', () => {
    order.productId = 321;
    expect(order.productId).toBe(321);
  });

  it('should be able to set and get a order value', () => {
    order.value = 2990.99;
    expect(order.value).toBe(2990.99);
  });

  it('should be able to set and get a order status', () => {
    order.status = OrderStatuses.CANCELLED;
    expect(order.status).toBe(OrderStatuses.CANCELLED);
  });

  it('should be able to set and get a order document', () => {
    order.document = 'test';
    expect(order.document).toBe('test');
  });

  it('should be able to set and get a order payment', () => {
    order.payment = 'pix';
    expect(order.payment).toBe('pix');
  });

  it('should be able to set and get a order createdAt', () => {
    order.createdAt = '2022-01-01';

    expect(order.createdAt).toBe('2022-01-01 00:00:00');
  });
});
