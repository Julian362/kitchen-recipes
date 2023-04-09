import {
  ingredientServiceMock,
  ingredientServiceMockError,
  ingredientServiceMockNull,
  recipeDtoMock,
  recipeServiceMock,
  recipeServiceMockNull,
} from '@application/use-cases/__mocks__/user-case.mock';
import { CreateRecipeUseCase } from '../create-recipe.use-case';

describe('CreateRecipeUseCase', () => {
  let createRecipeUseCase: CreateRecipeUseCase;

  beforeEach(() => {
    //Arrange
    createRecipeUseCase = new CreateRecipeUseCase(
      recipeServiceMock,
      ingredientServiceMock,
    );
  });

  it('should be defined', () => {
    expect(createRecipeUseCase).toBeDefined();
  });

  it('should create a recipe', (done) => {
    //Act
    createRecipeUseCase.execute(recipeDtoMock).subscribe((recipe) => {
      //Assert
      expect(recipe).toEqual(recipeDtoMock);
      done();
    });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new CreateRecipeUseCase(
      recipeServiceMockNull,
      ingredientServiceMockNull,
    );
    //Act
    useCaseWrong.execute(recipeDtoMock).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new CreateRecipeUseCase(
      recipeServiceMockNull,
      ingredientServiceMockError,
    );
    //Act
    useCaseWrong.execute(recipeDtoMock).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });
});
