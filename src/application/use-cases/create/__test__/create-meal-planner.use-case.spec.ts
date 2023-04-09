import {
  ingredientServiceMock,
  ingredientServiceMockError,
  mealPlannerDto,
  mealPlannerServiceMock,
  mealPlannerServiceMockNull,
  userServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { ingredientServiceMockNull } from '../../__mocks__/user-case.mock';
import { CreateMealPlannerUseCase } from '../create-meal-planner.use-case';

describe('CreateMealPlannerUseCase', () => {
  let createMealPlannerUseCase: CreateMealPlannerUseCase;
  beforeEach(() => {
    //Arrange
    createMealPlannerUseCase = new CreateMealPlannerUseCase(
      mealPlannerServiceMock,
      ingredientServiceMock,
      userServiceMock,
    );
  });

  it('should be defined', () => {
    expect(createMealPlannerUseCase).toBeDefined();
  });

  it('should create a meal planner', (done) => {
    //Act
    createMealPlannerUseCase
      .execute('id', mealPlannerDto)
      .subscribe((mealPlanner) => {
        //Assert
        expect(mealPlanner).toBeDefined();
        done();
      });
  });

  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new CreateMealPlannerUseCase(
      mealPlannerServiceMockNull,
      ingredientServiceMockNull,
      userServiceMock,
    );
    //Act
    useCaseWrong.execute('id', mealPlannerDto).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });
  it('should throw an error', (done) => {
    //Arrange
    const useCaseWrong = new CreateMealPlannerUseCase(
      mealPlannerServiceMockNull,
      ingredientServiceMockError,
      userServiceMock,
    );
    //Act
    useCaseWrong.execute('id', mealPlannerDto).subscribe({
      error: (error) => {
        //Assert
        expect(error).toBeDefined();
        done();
      },
    });
  });
});
