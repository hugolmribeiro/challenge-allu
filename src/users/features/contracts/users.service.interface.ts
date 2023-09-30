import { CreateUserDto } from '@/users/http/dto/create-user.dto';
import { UpdateUserDto } from '@/users/http/dto/update-user.dto';
import { User } from '../entities/user.entity';

export interface IUsersService {
  create(user: CreateUserDto): Promise<User>;
  findById(id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update(id: number, user: UpdateUserDto): Promise<User>;
}
