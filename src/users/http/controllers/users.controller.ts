import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUsersService } from '@/users/features/contracts/users.service.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '@/common/utils/decorators/is-public.decorator';
import { JwtUser } from '@/common/utils/models/jwt-user.interface';
import { CurrentUser } from '@/common/utils/decorators/current-user.decorator';

@Controller('users')
@ApiBearerAuth('JWT-auth')
@ApiTags('users')
export class UsersController {
  constructor(
    @Inject('IUsersService')
    private readonly usersService: IUsersService,
  ) {}

  @Post()
  @IsPublic()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user.serialize();
  }

  @Get('me')
  async findById(@CurrentUser() loggedUser: JwtUser) {
    const user = await this.usersService.findById(loggedUser.id);
    return user.serialize();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(+id, updateUserDto);
    return user.serialize();
  }
}
