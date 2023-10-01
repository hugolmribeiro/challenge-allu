import { IsPublic } from '@/common/utils/decorators/is-public.decorator';
import { IProductsService } from '@/products/features/contracts/products.service.interface';
import { Product } from '@/products/features/entities/product.entity';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiBearerAuth('JWT-auth')
@ApiTags('products')
export class ProductsController {
  constructor(
    @Inject('IProductsService')
    private readonly productsService: IProductsService,
  ) {}

  @Get()
  @IsPublic()
  public async findAll(
    @Query('search') search: string,
    @Query('orderBy') orderBy: string,
    @Query('order') order: string,
  ) {
    const products = await this.productsService.findAll(search, orderBy, order);
    return products.map((product: Product) => product.serialize());
  }

  @Get(':id')
  @IsPublic()
  public async findById(@Query('id') id: number) {
    const product = await this.productsService.findById(id);
    return product.serialize();
  }

  @Get('code/:code')
  @IsPublic()
  public async findByCode(@Query('code') code: string) {
    const product = await this.productsService.findByCode(code);
    return product.serialize();
  }
}
