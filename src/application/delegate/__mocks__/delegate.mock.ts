import {
  IIngredientService,
  IMealPlannerService,
  IRecipeService,
  IUserService,
} from '@domain/services';

export const recipeServiceMock: IRecipeService = {
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
};
export const ingredientServiceMock: IIngredientService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
  findByName: jest.fn(),
  update: jest.fn(),
};
export const mealPlannerServiceMock: IMealPlannerService = {
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
};
export const userServiceMock: IUserService = {
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
};
