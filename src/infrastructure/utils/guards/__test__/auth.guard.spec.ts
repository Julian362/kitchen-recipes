import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { of } from 'rxjs';
import { AuthGuard } from '../auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockContext: ExecutionContext;
  let mockJwtService: JwtService;

  beforeEach(() => {
    mockJwtService = {
      verify: jest.fn(),
    } as unknown as JwtService;

    mockContext = {
      switchToHttp: jest.fn().mockReturnThis(),
      getRequest: jest.fn().mockReturnValue({
        headers: {
          login: 'Bearer token',
        },
      }),
    } as unknown as ExecutionContext;

    guard = new AuthGuard(mockJwtService);
  });

  describe('canActivate', () => {
    it('should return true if the token is verified', async () => {
      // Arrange
      const mockVerifyResult = true;
      (mockJwtService.verify as jest.Mock).mockReturnValue(
        of(mockVerifyResult),
      );

      // Act
      const result = await guard.canActivate(mockContext).toPromise();

      // Assert
      expect(result).toBe(mockVerifyResult);
      expect(mockJwtService.verify).toHaveBeenCalledWith('Bearer');
    });

    it('should return false if the token is not verified', async () => {
      // Arrange
      const mockVerifyResult = false;
      (mockJwtService.verify as jest.Mock).mockReturnValue(
        of(mockVerifyResult),
      );

      // Act
      const result = await guard.canActivate(mockContext).toPromise();

      // Assert
      expect(result).toBe(mockVerifyResult);
      expect(mockJwtService.verify).toHaveBeenCalledWith('Bearer');
    });
  });
});
