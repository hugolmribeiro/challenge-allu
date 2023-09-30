import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { LocalAuthGuard } from '../http/guards/local-auth.guard';
describe('LocalAuthGuard', () => {
  let localAuthGuard: LocalAuthGuard;
  const mockContext = {
    switchToHttp: () => ({
      getRequest: () => ({}),
    }),
  } as ExecutionContext;
  beforeEach(() => {
    localAuthGuard = new LocalAuthGuard();
  });

  describe('canActivate', () => {
    it('should return true if the authentication is successful', async () => {
      jest.spyOn(localAuthGuard, 'canActivate').mockReturnValue(true);
      const result = await localAuthGuard.canActivate(mockContext);
      expect(result).toBe(true);
    });

    it('should throw an UnauthorizedException if the authentication fails', async () => {
      jest.spyOn(localAuthGuard, 'canActivate').mockReturnValue(false);
      const result = await localAuthGuard.canActivate(mockContext);
      expect(result).toBe(false);
    });
  });

  describe('handleRequest', () => {
    it('should return the user object if the authentication is successful', async () => {
      const mockUser = { id: 1, username: 'test' };
      const result = await localAuthGuard.handleRequest(null, mockUser);
      expect(result).toBe(mockUser);
    });

    it('should throw an UnauthorizedException if the authentication fails', async () => {
      const mockError = new Error('Invalid credentials');
      try {
        await localAuthGuard.handleRequest(mockError, null);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });
  });
});
