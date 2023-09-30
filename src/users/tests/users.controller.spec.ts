import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../http/controllers/users.controller';
import { User } from '../features/entities/user.entity';
import { IUsersService } from '../features/contracts/users.service.interface';
import { CreateUserDto } from '../http/dto/create-user.dto';
import { UpdateUserDto } from '../http/dto/update-user.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: IUsersService;
  let resultUser: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: 'IUsersService',
          useFactory: () => ({
            create: jest.fn(),
            findById: jest.fn(),
            findByEmail: jest.fn(),
            update: jest.fn(),
          }),
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<IUsersService>('IUsersService');
    resultUser = new User(
      1,
      'John',
      'jdoe@example.com',
      'hashedPassword',
      new Date().toISOString(),
      null,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call create', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(resultUser);
    const dto: CreateUserDto = {
      name: 'John',
      email: 'jdoe@example.com',
      password: 'password',
    };
    const response = await controller.create(dto);
    expect(response).toEqual(resultUser);
  });

  it('should call findById', async () => {
    jest.spyOn(service, 'findById').mockResolvedValue(resultUser);
    const response = await controller.findById('1');
    expect(response).toEqual(resultUser);
  });

  it('should call findByEmail', async () => {
    jest.spyOn(service, 'findByEmail').mockResolvedValue(resultUser);
    const response = await controller.findByEmail('jdoe@example.com');
    expect(response).toEqual(resultUser);
  });

  it('should call update', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(resultUser);
    const dto: UpdateUserDto = {
      name: 'John',
      email: 'jdoe@example.com',
      password: 'password',
      createdAt: new Date('2023-01-01').toISOString(),
    };
    const response = await controller.update('1', dto);
    expect(response).toEqual(resultUser);
  });
});
