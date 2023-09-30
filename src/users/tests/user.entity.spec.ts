import { User } from '../features/entities/user.entity';

describe('User', () => {
  const user = new User(
    1,
    'John',
    'jdoe@example.com',
    'hashedPassword',
    new Date().toISOString(),
    null,
  );

  it('should be able to create a user', () => {
    expect(user).toBeDefined();
  });

  it('should be able to set and get a user id', () => {
    user.id = 2;
    expect(user.id).toBe(2);
  });

  it('should be able to set and get a user firstName', () => {
    user.name = 'Test';
    expect(user.name).toBe('Test');
  });

  it('should be able to set and get a user email', () => {
    user.email = 'test@example.com';
    expect(user.email).toBe('test@example.com');
  });

  it('should be able to set and get a user password', () => {
    user.password = 'password';
    expect(user.password).toBe('password');
  });

  it('should be able to set and get a user createdAt', () => {
    user.createdAt = '2022-01-01';

    expect(user.createdAt).toBe('2022-01-01 00:00:00');
  });

  it('should be able to set and get a user updatedAt', () => {
    user.updatedAt = '2022-01-01';

    expect(user.updatedAt).toBe('2022-01-01 00:00:00');
  });
});
