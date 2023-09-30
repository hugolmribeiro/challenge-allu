import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './http/controllers/auth.controller';
import { AuthService } from './features/services/auth.service';
import { JwtStrategy } from './http/strategies/jwt.strategy';
import { LocalStrategy } from './http/strategies/local.strategy';
import { LoginValidationMiddleware } from './http/middlewares/login-validation.middleware';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: 'IAuthService',
      useClass: AuthService,
    },
    JwtStrategy,
    LocalStrategy,
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  exports: ['IAuthService'],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('auth');
  }
}
