import { validate } from 'class-validator';
import { mockUpdateIngredientDto } from '../__mocks__/dto.mock';
import { UpdateIngredientDto } from '../update-ingredient.dto';

describe('UpdateIngredientDto', () => {
  let updateIngredientDto: UpdateIngredientDto;

  beforeEach(() => {
    updateIngredientDto = new UpdateIngredientDto();
  });

  it('should be defined and is a instance of UpdateIngredientDto', () => {
    // Assert
    expect(updateIngredientDto).toBeDefined();
    expect(updateIngredientDto).toBeInstanceOf(UpdateIngredientDto);
  });

  it('should have the required properties', () => {
    // Arrange & Act
    updateIngredientDto.name = mockUpdateIngredientDto.name;
    updateIngredientDto.description = mockUpdateIngredientDto.description;
    updateIngredientDto.photoUrl = mockUpdateIngredientDto.photoUrl;

    // Assert
    expect(updateIngredientDto.name).toBeDefined();
    expect(updateIngredientDto.description).toBeDefined();
    expect(updateIngredientDto.photoUrl).toBeDefined();
  });

  it('should validate the optional', async () => {
    // Arrange
    updateIngredientDto.name = undefined;
    updateIngredientDto.description = undefined;
    updateIngredientDto.photoUrl = undefined;
    // Act
    const result = await validate(updateIngredientDto);

    // Assert
    expect(result.length).toBe(0);
  });

  it('should validate the required properties', async () => {
    // Arrange
    updateIngredientDto.name = 1 as any;
    updateIngredientDto.description = 1 as any;
    updateIngredientDto.photoUrl = 1 as any;
    // Act
    const result = await validate(updateIngredientDto);

    // Assert
    expect(result.length).toBe(3);
  });
});
