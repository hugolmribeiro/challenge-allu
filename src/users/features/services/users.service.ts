import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../../http/dto/create-user.dto';
import { UpdateUserDto } from '../../http/dto/update-user.dto';
import { IUsersService } from '../contracts/users.service.interface';
import { User } from '../entities/user.entity';
import { IUsersRepository } from '../contracts/users.repository.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject('IUsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const passwordHash = await hash(createUserDto.password, 10);
    const user = new User(
      null,
      createUserDto.name,
      createUserDto.email,
      passwordHash,
      new Date().toISOString(),
      null,
    );
    return this.usersRepository.store(user);
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findById(id);
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const passwordHash = await hash(updateUserDto.password, 10);
    const user = new User(
      id,
      updateUserDto.name,
      updateUserDto.email,
      passwordHash,
      new Date(updateUserDto.createdAt).toISOString(),
      new Date().toISOString(),
    );
    return this.usersRepository.update(id, user);
  }
}
