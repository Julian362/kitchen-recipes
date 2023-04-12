import {
  authServiceMock,
  getIdMock,
  userServiceMock,
  userServiceMockNull,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UserDomainModel } from '@domain/models';
import { NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GetUserUseCase } from '../get-user.use-case';

describe('GetUserUseCase', () => {
  let useCase: GetUserUseCase;
  let observable: Observable<{
    data: UserDomainModel;
    token: string;
  }>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetUserUseCase(userServiceMock, authServiceMock);
      // Act
      observable = useCase.execute(getIdMock);
    });
    it('should be defined', () => {
      // Assert
      expect(useCase).toBeDefined();
    });
    it('should return an observable', () => {
      // Assert
      expect(observable).toBeInstanceOf(Observable);
    });
    it('should call the service', () => {
      // Assert
      expect(userServiceMock.findById).toBeCalled();
    });
    it('should call the authService', () => {
      // Act
      useCase.execute(getIdMock).subscribe((data) => {
        // Assert
        expect(data).toBeDefined();
      });

      // Assert
      expect(authServiceMock.generateToken).toBeCalled();
    });

    it('should return a throw error', () => {
      // Arrange
      useCase = new GetUserUseCase(userServiceMockNull, authServiceMock);
      // Act
      useCase.execute(getIdMock).subscribe({
        // Assert
        error: (err) => {
          expect(err).toBeDefined();
          expect(err).toBeInstanceOf(NotFoundException);
          expect(err.message).toBe('User not found');
        },
      });
    });
  });
});
