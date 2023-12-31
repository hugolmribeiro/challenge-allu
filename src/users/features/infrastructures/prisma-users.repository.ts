import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/framework/prisma/prisma.service';
import { IUsersRepository } from '../contracts/users.repository.interface';
import { User } from '../entities/user.entity';
import { PrismaUserMapper } from './mappers/prisma-user.mapper';

@Injectable()
export class PrismaUsersRepository implements IUsersRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: PrismaUserMapper,
  ) {}

  public async store(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        ...this.mapper.toPrisma(user),
      },
    });
    return this.mapper.toDomain(createdUser);
  }

  public async findById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) {
      return null;
    }
    return this.mapper.toDomain(user);
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }
    return this.mapper.toDomain(user);
  }

  public async update(id: number, user: User): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...this.mapper.toPrisma(user),
      },
    });
    return this.mapper.toDomain(updatedUser);
  }
}
