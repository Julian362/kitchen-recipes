import { CreateUserUseCase } from '@application/use-cases';
import {
  authServiceMock,
  userDtoMock,
  userServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UserDomainModel } from '@domain/models';
import { Observable } from 'rxjs';

describe('CreateUserUseCase', () => {
  let useCase: CreateUserUseCase;
  let observable: Observable<{
    data: UserDomainModel;
    token: string;
  }>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new CreateUserUseCase(userServiceMock, authServiceMock);
      // Act
      observable = useCase.execute(userDtoMock);
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
      expect(userServiceMock.create).toBeCalled();
    });
    it('should call the authService', () => {
      // Act
      useCase.execute(userDtoMock).subscribe((data) => {
        // Assert
        expect(data).toBeDefined();
      });

      // Assert
      expect(authServiceMock.generateToken).toBeCalled();
    });
  });
});
