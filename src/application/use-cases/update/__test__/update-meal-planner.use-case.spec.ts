import {
  getIdMock,
  ingredientServiceMock,
  ingredientServiceMockError,
  ingredientServiceMockNull,
  mealPlannerDto,
  mealPlannerServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UpdateMealPlannerUseCase } from '../update-meal-planner.use-case';

describe('UpdateMealPlannerUseCase', () => {
  let useCase: UpdateMealPlannerUseCase;

  beforeEach(() => {
    //Arrange
    useCase = new UpdateMealPlannerUseCase(
      mealPlannerServiceMock,
      ingredientServiceMock,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should update a meal planner', (done) => {
    //Act
    useCase.execute(getIdMock, mealPlannerDto).subscribe((mealPlanner) => {
      //Assert
      expect(mealPlanner).toBeDefined();
      done();
    });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new UpdateMealPlannerUseCase(
      mealPlannerServiceMock,
      ingredientServiceMockNull,
    );
    //Act
    useCaseWrong.execute(getIdMock, mealPlannerDto).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new UpdateMealPlannerUseCase(
      mealPlannerServiceMock,
      ingredientServiceMockError,
    );
    //Act
    useCaseWrong.execute(getIdMock, mealPlannerDto).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });

  it('should update a meal planner', (done) => {
    //Act
    useCase.execute(getIdMock, {} as any).subscribe((mealPlanner) => {
      //Assert
      expect(mealPlanner).toBeDefined();
      done();
    });
  });
});
