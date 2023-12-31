import { User as PrismaUser } from '@prisma/client';
import { User as UserEntity } from '../../entities/user.entity';

export class PrismaUserMapper {
  public toPrisma(user: UserEntity) {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
  public toDomain(prismaUser: PrismaUser): UserEntity {
    return new UserEntity(
      prismaUser.id,
      prismaUser.name,
      prismaUser.email,
      prismaUser.password,
      prismaUser.createdAt,
      prismaUser.updatedAt,
    );
  }
}
