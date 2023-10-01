import { UserToken } from '@/auth/utils/models/user-token.interface';
import { User } from '@/users/features/entities/user.entity';

export interface IAuthService {
  signIn(user: User): UserToken;
  validateUser(email: string, password: string): Promise<User>;
}
