import { UserToken } from '@/auth/utils/models/UserToken';
import { User } from '@/users/features/entities/user.entity';

export interface IAuthService {
  signIn(user: User): UserToken;
  validateUser(email: string, password: string): Promise<User>;
}
