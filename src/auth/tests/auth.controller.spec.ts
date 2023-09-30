import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../http/controllers/auth.controller';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: 'IAuthService',
          useValue: {
            signIn: jest.fn(),
            validateUser: jest.fn(),
          },
        },
      ],
    }).compile();
    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });
});
