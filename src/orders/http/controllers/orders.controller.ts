import { IOrdersService } from '@/orders/features/contracts/orders.service.interface';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from '../dto/create-order.dto';
import { CurrentUser } from '@/common/utils/decorators/current-user.decorator';
import { JwtUser } from '@/common/utils/models/jwt-user.interface';
import { Order } from '@/orders/features/entities/order.entity';
import { UpdateOrderStatusDto } from '../dto/update-order-status.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('orders')
@ApiBearerAuth('JWT-auth')
@ApiTags('orders')
export class OrdersController {
  constructor(
    @Inject('IOrdersService')
    private readonly ordersService: IOrdersService,
  ) {}

  @Post()
  async create(
    @CurrentUser() loggedUser: JwtUser,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    const order = await this.ordersService.create(
      loggedUser.id,
      createOrderDto,
    );
    return order.serialize();
  }

  @Get('me')
  async findByUserId(@CurrentUser() loggedUser: JwtUser) {
    const orders = await this.ordersService.findByUserId(loggedUser.id);
    return orders.map((order: Order) => order.serialize());
  }

  @Patch(':id')
  async updateStatus(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    const order = await this.ordersService.updateStatus(
      +id,
      updateOrderStatusDto,
    );
    return order.serialize();
  }

  @Post('document')
  @UseInterceptors(FileInterceptor('document'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        document: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(
    @CurrentUser() loggedUser: JwtUser,
    @UploadedFile() file: any,
  ) {
    const url = await this.ordersService.uploadDocument(loggedUser.id, file);
    return { message: 'Arquivo enviado com sucesso', fileUrl: url };
  }
}
