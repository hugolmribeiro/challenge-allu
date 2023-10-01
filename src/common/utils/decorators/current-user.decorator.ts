import { User } from '@/users/features/entities/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../../../auth/utils/models/auth-request.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
