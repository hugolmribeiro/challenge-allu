import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { JwtAuthGuard } from '../http/guards/jwt-auth.guard';

describe('JwtAuthGuard', () => {
  let jwtAuthGuard: JwtAuthGuard;
  let reflector: Reflector;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        JwtAuthGuard,
        {
          provide: Reflector,
          useValue: {
            getAllAndOverride: jest.fn(),
          },
        },
      ],
    }).compile();

    jwtAuthGuard = moduleRef.get<JwtAuthGuard>(JwtAuthGuard);
    reflector = moduleRef.get<Reflector>(Reflector);
  });

  describe('canActivate', () => {
    it('should return true if the handler is public', () => {
      jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(true);

      const context: ExecutionContext = {
        getClass: () => null,
        getHandler: () => null,
        switchToHttp: () => null,
      } as any;

      const result = jwtAuthGuard.canActivate(context);

      expect(result).toBe(true);
      expect(reflector.getAllAndOverride).toHaveBeenCalledWith('isPublic', [
        null,
        null,
      ]);
    });

    it('should return false if canActivate() returns false', async () => {
      jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(false);
      jest.spyOn(jwtAuthGuard, 'canActivate').mockReturnValue(false);

      const context: ExecutionContext = {
        getClass: () => null,
        getHandler: () => null,
        switchToHttp: () => null,
      } as any;

      const result = jwtAuthGuard.canActivate(context);

      expect(result).toBe(false);
    });

    it('should return the result of canActivate() if it returns true', () => {
      jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(false);
      jest.spyOn(jwtAuthGuard, 'canActivate').mockReturnValue(true);

      const context: ExecutionContext = {
        getClass: () => null,
        getHandler: () => null,
        switchToHttp: () => null,
      } as any;

      const result = jwtAuthGuard.canActivate(context);
      expect(result).toBe(true);
    });
  });
});
