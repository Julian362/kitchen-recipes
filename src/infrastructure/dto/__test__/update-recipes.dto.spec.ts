import { validate } from 'class-validator';
import { mockUpdateRecipeDto } from '../__mocks__/dto.mock';
import { UpdateRecipeDto } from '../update-recipe.dto';

describe('UpdateRecipesDto', () => {
  let updateRecipeDto: UpdateRecipeDto;

  beforeEach(() => {
    updateRecipeDto = new UpdateRecipeDto();
  });

  it('should be defined and is a instance of UpdateRecipesDto', () => {
    // Assert
    expect(updateRecipeDto).toBeDefined();
    expect(updateRecipeDto).toBeInstanceOf(UpdateRecipeDto);
  });

  it('should have the required properties', () => {
    // Arrange & Act
    updateRecipeDto.name = mockUpdateRecipeDto.name;
    updateRecipeDto.description = mockUpdateRecipeDto.description;
    updateRecipeDto.ingredients = mockUpdateRecipeDto.ingredients;
    updateRecipeDto.notes = mockUpdateRecipeDto.notes;
    updateRecipeDto.nutritionInfo = mockUpdateRecipeDto.nutritionInfo;
    updateRecipeDto.servings = mockUpdateRecipeDto.servings;
    updateRecipeDto.steps = mockUpdateRecipeDto.steps;
    updateRecipeDto.photoUrl = mockUpdateRecipeDto.photoUrl;

    // Assert
    expect(updateRecipeDto.name).toBeDefined();
    expect(updateRecipeDto.description).toBeDefined();
    expect(updateRecipeDto.ingredients).toBeDefined();
    expect(updateRecipeDto.notes).toBeDefined();
    expect(updateRecipeDto.nutritionInfo).toBeDefined();
    expect(updateRecipeDto.servings).toBeDefined();
    expect(updateRecipeDto.steps).toBeDefined();
    expect(updateRecipeDto.photoUrl).toBeDefined();
  });

  it('should validate the optional', async () => {
    // Arrange
    updateRecipeDto.name = undefined;
    updateRecipeDto.description = undefined;
    updateRecipeDto.ingredients = undefined;
    updateRecipeDto.notes = undefined;
    updateRecipeDto.nutritionInfo = undefined;
    updateRecipeDto.servings = undefined;
    updateRecipeDto.steps = undefined;
    updateRecipeDto.photoUrl = undefined;
    // Act
    const result = await validate(updateRecipeDto);

    // Assert
    expect(result.length).toBe(0);
  });

  it('should validate the required properties', async () => {
    // Arrange
    updateRecipeDto.name = 1 as any;
    updateRecipeDto.description = 1 as any;
    updateRecipeDto.ingredients = 1 as any;
    updateRecipeDto.notes = 1 as any;
    updateRecipeDto.nutritionInfo = 1 as any;
    updateRecipeDto.servings = '' as any;
    updateRecipeDto.steps = 1 as any;
    updateRecipeDto.photoUrl = 1 as any;
    // Act
    const result = await validate(updateRecipeDto);

    // Assert
    expect(result.length).toBe(8);
  });
});
