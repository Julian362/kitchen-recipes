import {
  getIdMock,
  ingredientServiceMock,
  ingredientServiceMockError,
  ingredientServiceMockNull,
  recipeDtoMock,
  recipeMock,
  recipeServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UpdateRecipeUseCase } from '../update-recipe.use-case';

describe('UpdateRecipeUseCase', () => {
  let updateRecipeUseCase: UpdateRecipeUseCase;

  beforeEach(() => {
    //Arrange
    updateRecipeUseCase = new UpdateRecipeUseCase(
      recipeServiceMock,
      ingredientServiceMock,
    );
  });

  it('should be defined', () => {
    expect(updateRecipeUseCase).toBeDefined();
  });

  it('should update a recipe', (done) => {
    //Act
    updateRecipeUseCase
      .execute(getIdMock, recipeDtoMock)
      .subscribe((recipe) => {
        //Assert
        expect(recipe).toBeDefined();
        done();
      });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new UpdateRecipeUseCase(
      recipeServiceMock,
      ingredientServiceMockNull,
    );
    //Act
    useCaseWrong.execute(getIdMock, recipeDtoMock).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new UpdateRecipeUseCase(
      recipeServiceMock,
      ingredientServiceMockError,
    );
    //Act
    useCaseWrong.execute(getIdMock, recipeMock).subscribe({
      //Assert
      error: (error) => {
        expect(error).toBeDefined();
        done();
      },
    });
  });

  it('should update a recipe', (done) => {
    //Act
    updateRecipeUseCase.execute(getIdMock, {} as any).subscribe((recipe) => {
      //Assert
      expect(recipe).toBeDefined();
      done();
    });
  });
});
