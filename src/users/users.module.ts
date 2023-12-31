import { Module } from '@nestjs/common';
import { UsersService } from './features/services/users.service';
import { UsersController } from './http/controllers/users.controller';
import { PrismaModule } from '@/common/framework/prisma/prisma.module';
import { PrismaUsersRepository } from './features/infrastructures/prisma-users.repository';
import { PrismaUserMapper } from './features/infrastructures/mappers/prisma-user.mapper';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'IUsersService',
      useClass: UsersService,
    },
    {
      provide: 'IUsersRepository',
      useClass: PrismaUsersRepository,
    },
    PrismaUserMapper,
  ],
  imports: [PrismaModule],
  exports: ['IUsersService'],
})
export class UsersModule {}
