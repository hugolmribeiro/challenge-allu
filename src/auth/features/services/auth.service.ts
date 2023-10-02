import { UserPayload } from '@/auth/utils/models/user-payload.interface';
import { UserToken } from '@/auth/utils/models/user-token.interface';
import { IUsersService } from '@/users/features/contracts/users.service.interface';
import { User } from '@/users/features/entities/user.entity';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { IAuthService } from '../contracts/auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('IUsersService')
    private readonly usersService: IUsersService,
    private readonly jwtService: JwtService,
  ) {}

  signIn(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      message: 'Logged in successfully',
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const passwordIsValid = await compare(password, user.password);

    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    user.password = undefined;
    return user;
  }
}
