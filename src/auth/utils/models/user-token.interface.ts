import { JwtUser } from '@/common/utils/models/jwt-user.interface';

export interface UserToken {
  message: string;
  accessToken: string;
  user: JwtUser;
}
