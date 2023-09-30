import { User as UserEntity } from '../entities/user.entity';

export interface IUsersRepository {
  store(user: UserEntity): Promise<UserEntity>;
  findById(id: number): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  update(id: number, user: UserEntity): Promise<UserEntity>;
}
