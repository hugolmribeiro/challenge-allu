import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../features/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { IUsersService } from '@/users/features/contracts/users.service.interface';
import { User } from '@/users/features/entities/user.entity';
import { UserToken } from '../utils/models/UserToken';
import { UsersModule } from '@/users/users.module';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: IUsersService;
  let jwtService: JwtService;

  const user = new User(
    1,
    'John',
    'jdoe@example.com',
    'hashedPassword',
    new Date().toISOString(),
    null,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: { sign: jest.fn() } },
      ],
      imports: [UsersModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<IUsersService>('IUsersService');
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signIn', () => {
    it('should call service signIn', async () => {
      const userToken: UserToken = {
        message: 'Logged in successfully',
        accessToken: 'token',
      };
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');
      const response = await service.signIn(user);
      expect(response).toEqual(userToken);
    });
  });

  describe('validateUser', () => {
    it('should call service validateUser', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(user);
      const response = await service.validateUser(user.email, 'password');
      expect(usersService.findByEmail).toHaveBeenCalledWith(user.email);
      expect(usersService.findByEmail).toHaveBeenCalledTimes(1);
      expect(response).toEqual(user);
    });
  });
});
