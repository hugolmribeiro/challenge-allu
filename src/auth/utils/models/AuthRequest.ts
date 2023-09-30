import { User } from '@/users/features/entities/user.entity';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: User;
}
