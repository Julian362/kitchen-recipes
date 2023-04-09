import { validate } from 'class-validator';
import { mockCreateUserDto } from '../__mocks__/dto.mock';
import { CreateUserDto } from '../create-user.dto';

describe('CreateUserDto', () => {
  let createUserDto: CreateUserDto;

  beforeEach(() => {
    createUserDto = new CreateUserDto();
  });

  it('should be defined and is a instance of CreateUserDto', () => {
    // Assert
    expect(createUserDto).toBeDefined();
    expect(createUserDto).toBeInstanceOf(CreateUserDto);
  });

  it('should have the required properties', () => {
    // Arrange & Act
    createUserDto.email = mockCreateUserDto.email;
    createUserDto.googleId = mockCreateUserDto.googleId;
    createUserDto.name = mockCreateUserDto.name;
    createUserDto.photoUrl = mockCreateUserDto.photoUrl;

    // Assert
    expect(createUserDto.email).toBeDefined();
    expect(createUserDto.googleId).toBeDefined();
    expect(createUserDto.name).toBeDefined();
    expect(createUserDto.photoUrl).toBeDefined();
  });

  it('should validate the required properties', async () => {
    // Act
    const result = await validate(createUserDto);

    // Assert
    expect(result.length).toBe(4);
  });
});
