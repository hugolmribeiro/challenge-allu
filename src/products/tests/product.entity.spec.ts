import { Product } from '../features/entities/product.entity';

describe('Product', () => {
  const product = new Product(
    1,
    'iPhone 13',
    'iphone-13',
    2699.9,
    'Aluguel de iPhone OS',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  );

  it('should be able to create a product', () => {
    expect(product).toBeDefined();
  });

  it('should be able to set and get a product id', () => {
    product.id = 2;
    expect(product.id).toBe(2);
  });

  it('should be able to set and get a product name', () => {
    product.name = 'Test';
    expect(product.name).toBe('Test');
  });

  it('should be able to set and get a product code', () => {
    product.code = 'test';
    expect(product.code).toBe('test');
  });

  it('should be able to set and get a product price', () => {
    product.price = 2899.99;
    expect(product.price).toBe(2899.99);
  });

  it('should be able to set and get a product description', () => {
    product.description = 'description';
    expect(product.description).toBe('description');
  });

  it('should be able to set and get a product image', () => {
    product.image = 'http://image.com';
    expect(product.image).toBe('http://image.com');
  });
});
