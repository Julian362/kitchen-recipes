import { validate } from 'class-validator';
import { mockCreateIngredientDto } from '../__mocks__/dto.mock';
import { CreateIngredientDto } from '../create-ingredient.dto';

describe('CreateIngredientDto', () => {
  let dto: CreateIngredientDto;
  beforeEach(() => {
    // Arrange & Act
    dto = new CreateIngredientDto();
  });

  it('should be defined and is a instance of CreateIngredientDto', () => {
    // Assert
    expect(dto).toBeDefined();
    expect(dto).toBeInstanceOf(CreateIngredientDto);
  });

  it('should create a valid instance of CreateIngredientDto', async () => {
    // Arrange
    dto.description = mockCreateIngredientDto.description;
    dto.name = mockCreateIngredientDto.name;
    dto.photoUrl = mockCreateIngredientDto.photoUrl;
    // Act
    const error = await validate(dto);
    // Assert
    expect(error.length).toBe(0);
  });

  it('should validate the required properties', async () => {
    // Act
    const error = await validate(dto);
    // Assert
    expect(error.length).toBe(3);
  });
});
