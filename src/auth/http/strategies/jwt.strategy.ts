import { JwtUser } from '../../utils/models/JwtUser';
import { UserPayload } from '../../utils/models/UserPayload';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: UserPayload): Promise<JwtUser> {
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
    };
  }
}
