import { validate } from 'class-validator';
import { mockCreateRecipeDto } from '../__mocks__/dto.mock';
import { CreateRecipeDto } from '../create-recipe.dto';

describe('CreateRecipeDto', () => {
  let createRecipeDto: CreateRecipeDto;

  beforeEach(() => {
    createRecipeDto = new CreateRecipeDto();
  });

  it('should be defined and is a instance of CreateRecipeDto', () => {
    // Assert
    expect(createRecipeDto).toBeDefined();
    expect(createRecipeDto).toBeInstanceOf(CreateRecipeDto);
  });
  it('should have the required properties', () => {
    // Arrange & Act
    createRecipeDto.name = mockCreateRecipeDto.name;
    createRecipeDto.description = mockCreateRecipeDto.description;
    createRecipeDto.ingredients = mockCreateRecipeDto.ingredients;
    createRecipeDto.photoUrl = mockCreateRecipeDto.photoUrl;
    createRecipeDto.steps = mockCreateRecipeDto.steps;
    createRecipeDto.notes = mockCreateRecipeDto.notes;
    createRecipeDto.servings = mockCreateRecipeDto.servings;
    createRecipeDto.nutritionInfo = mockCreateRecipeDto.nutritionInfo;
    // Assert
    expect(createRecipeDto.name).toBeDefined();
    expect(createRecipeDto.description).toBeDefined();
    expect(createRecipeDto.ingredients).toBeDefined();
    expect(createRecipeDto.photoUrl).toBeDefined();
    expect(createRecipeDto.steps).toBeDefined();
    expect(createRecipeDto.notes).toBeDefined();
    expect(createRecipeDto.servings).toBeDefined();
    expect(createRecipeDto.nutritionInfo).toBeDefined();
  });

  it('should validate the required properties', async () => {
    // Act
    const result = await validate(createRecipeDto);

    // Assert
    expect(result.length).toBe(8);
  });
});
