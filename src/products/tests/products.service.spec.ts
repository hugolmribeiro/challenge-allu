import { Test, TestingModule } from '@nestjs/testing';
import { IProductsRepository } from '../features/contracts/products.repository.interface';
import { IProductsService } from '../features/contracts/products.service.interface';
import { Product } from '../features/entities/product.entity';
import { ProductsService } from '../features/services/products.service';

describe('ProductsService', () => {
  let service: IProductsService;
  let repository: IProductsRepository;
  let resultProduct: Product;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: 'IProductsService', useClass: ProductsService },
        {
          provide: 'IProductsRepository',
          useFactory: () => ({
            findAll: jest.fn(),
            findById: jest.fn(),
            findByCode: jest.fn(),
          }),
        },
      ],
    }).compile();
    service = module.get<IProductsService>('IProductsService');
    repository = module.get<IProductsRepository>('IProductsRepository');

    resultProduct = new Product(
      1,
      'iPhone 13',
      'iphone-13',
      2699.9,
      'Aluguel de iPhone OS',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call findAll', async () => {
    jest.spyOn(repository, 'findAll').mockResolvedValue([resultProduct]);
    const response = await service.findAll('products', 'price', 'asc');

    expect(repository.findAll).toHaveBeenCalledWith('products', {
      column: 'price',
      order: 'asc',
    });
    expect(response).toEqual([resultProduct]);
  });

  it('should call findById', async () => {
    jest.spyOn(repository, 'findById').mockResolvedValue(resultProduct);
    const response = await service.findById(1);
    expect(response).toEqual(resultProduct);
  });

  it('should call findByCode', async () => {
    jest.spyOn(repository, 'findByCode').mockResolvedValue(resultProduct);
    const response = await service.findByCode('iphone-13');
    expect(response).toEqual(resultProduct);
  });
});
