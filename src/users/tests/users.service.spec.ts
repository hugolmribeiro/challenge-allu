import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../features/services/users.service';
import { IUsersService } from '../features/contracts/users.service.interface';
import { IUsersRepository } from '../features/contracts/users.repository.interface';
import { User } from '../features/entities/user.entity';
import { UpdateUserDto } from '../http/dto/update-user.dto';
import { CreateUserDto } from '../http/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

describe('UsersService', () => {
  let service: IUsersService;
  let repository: IUsersRepository;
  let resultUser: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: 'IUsersService', useClass: UsersService },
        {
          provide: 'IUsersRepository',
          useFactory: () => ({
            store: jest.fn(),
            findById: jest.fn(),
            findByEmail: jest.fn(),
            update: jest.fn(),
          }),
        },
      ],
    }).compile();
    service = module.get<IUsersService>('IUsersService');
    repository = module.get<IUsersRepository>('IUsersRepository');

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
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const userToCreate: CreateUserDto = {
        name: 'John',
        email: 'jdoe@example.com',
        password: 'password',
      };
      console.log(new Date().toUTCString());
      const user = new User(
        null,
        userToCreate.name,
        userToCreate.email,
        'hashedPassword',
        new Date().toISOString(),
        null,
      );

      jest.spyOn(repository, 'store').mockResolvedValue(resultUser);
      const bcryptHash = jest.fn().mockResolvedValue('hashedPassword');
      (bcrypt.hash as jest.Mock) = bcryptHash;
      const result = await service.create(userToCreate);
      expect(repository.store).toHaveBeenCalledWith(user);

      expect(result).toEqual(resultUser);
    });
  });

  describe('findById', () => {
    it('should find user by id', async () => {
      jest.spyOn(repository, 'findById').mockResolvedValue(resultUser);

      const result = await service.findById(1);

      expect(repository.findById).toHaveBeenCalledWith(1);

      expect(result).toEqual(resultUser);
    });
  });

  describe('findByEmail', () => {
    it('should find user by email', async () => {
      jest.spyOn(repository, 'findByEmail').mockResolvedValue(resultUser);

      const result = await service.findByEmail('jdoe@example.com');

      expect(repository.findByEmail).toHaveBeenCalledWith('jdoe@example.com');

      expect(result).toEqual(resultUser);
    });
  });

  describe('update', () => {
    it('should update user', async () => {
      const userToUpdate: UpdateUserDto = {
        name: 'John',
        email: 'jdoe@example.com',
        password: 'password',
        createdAt: '2023-01-01T00:00:00.000Z',
      };

      const user = new User(
        1,
        userToUpdate.name,
        userToUpdate.email,
        'hashedPassword',
        '2023-01-01T00:00:00.000Z',
        new Date().toISOString(),
      );
      const bcryptHash = jest.fn().mockResolvedValue('hashedPassword');
      (bcrypt.hash as jest.Mock) = bcryptHash;
      jest.spyOn(repository, 'update').mockResolvedValue(resultUser);
      const result = await service.update(1, userToUpdate);

      expect(repository.update).toHaveBeenCalledWith(1, user);

      expect(result).toEqual(resultUser);
    });
  });
});
