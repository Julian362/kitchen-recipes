import {
  ICreateIngredientDto,
  ICreateMealPlannerDto,
  ICreateRecipeDto,
  ICreateUserDto,
  IUpdateIngredientDto,
  IUpdateMealPlannerDto,
  IUpdateRecipesDto,
} from '@domain/dto';
import {
  IngredientDomainModel,
  MealPlannerDomainModel,
  RecipeDomainModel,
  UserDomainModel,
} from '@domain/models';
import {
  IIngredientService,
  IMealPlannerService,
  IRecipeService,
  IUserService,
} from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { of, throwError } from 'rxjs';

export const ingredientMock: IngredientDomainModel = {
  name: 'name',
  description: 'description',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const IngredientDtoMock: ICreateIngredientDto = {
  name: 'name',
  description: 'description',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const updateIngredientDto: IUpdateIngredientDto = {
  name: 'name',
  description: 'description',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const recipeMock: RecipeDomainModel = {
  description: 'description',
  ingredients: [
    { amount: 1, ingredientId: 'ingredientId' },
    {
      amount: 1,
      ingredientId: 'ingredientId',
    },
  ],
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
  servings: 1,
  steps: ['step'],
  notes: 'notes',
  nutritionInfo: 'nutritionInfo',
  userId: 'userId',
};

export const updateRecipeDtoMock: IUpdateRecipesDto = {
  description: 'description',
  ingredients: [{ amount: 1, ingredientId: 'ingredientId' }],
  name: 'name',
  notes: 'notes',
  nutritionInfo: 'nutritionInfo',
  photoUrl: 'www.example.com/photoUrl.png',
  servings: 1,
  steps: ['step'],
};

export const recipeDtoMock: ICreateRecipeDto = {
  description: 'description',
  ingredients: [
    { amount: 1, ingredientId: 'ingredientId' },
    { amount: 1, ingredientId: 'ingredientId' },
  ],
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
  servings: 1,
  steps: ['step'],
  notes: 'notes',
  nutritionInfo: 'nutritionInfo',
  userId: 'userId',
};

export const mealPlannerMock: MealPlannerDomainModel = {
  name: 'name',
  amount: [{ amount: 1, ingredientId: 'ingredientId' }],
  notes: 'notes',
};

export const mealPlannerDto: ICreateMealPlannerDto = {
  amount: [{ amount: 1, ingredientId: 'ingredientId' }],
  name: 'name',
  notes: 'notes',
};

export const updateMealPlannerMock: IUpdateMealPlannerDto = {
  name: 'name',
  amount: [{ amount: 1, ingredientId: 'ingredientId' }],
  notes: 'notes',
};

export const userMock: UserDomainModel = {
  email: 'example@gmail.com',
  googleId: 'googleId',
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const userDtoMock: ICreateUserDto = {
  email: 'example@gmail.com',
  googleId: 'googleId',
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const deleteIdMock = 'deleteIdMock';

export const getIdMock = 'getIdMock';

export const updateIdMock = 'updateIdMock';

export const recipeServiceMock: IRecipeService = {
  create: jest.fn().mockReturnValue(of(recipeMock)),
  delete: jest.fn().mockReturnValue(of(recipeMock)),
  findById: jest.fn().mockReturnValue(of(recipeMock)),
  update: jest.fn().mockReturnValue(of(recipeMock)),
  findAllByUserId: jest.fn().mockReturnValue(of([recipeMock])),
};
export const ingredientServiceMock: IIngredientService = {
  create: jest.fn().mockReturnValue(of(ingredientMock)),
  findAll: jest.fn().mockReturnValue(of([ingredientMock])),
  findById: jest.fn().mockReturnValue(of(ingredientMock)),
  findByName: jest.fn().mockReturnValue(of([ingredientMock])),
  update: jest.fn().mockReturnValue(of(ingredientMock)),
};
export const mealPlannerServiceMock: IMealPlannerService = {
  create: jest.fn().mockReturnValue(of(mealPlannerMock)),
  delete: jest.fn().mockReturnValue(of(mealPlannerMock)),
  findById: jest.fn().mockReturnValue(of(mealPlannerMock)),
  update: jest.fn().mockReturnValue(of(mealPlannerMock)),
};
export const userServiceMock: IUserService = {
  create: jest.fn().mockReturnValue(of(userMock)),
  delete: jest.fn().mockReturnValue(of(userMock)),
  findById: jest.fn().mockReturnValue(of(userMock)),
  addMealPlanner: jest.fn().mockReturnValue(of(userMock)),
};

export const userServiceMockNull: IUserService = {
  create: jest.fn().mockReturnValue(of(null)),
  delete: jest.fn().mockReturnValue(of(null)),
  findById: jest.fn().mockReturnValue(of(null)),
  addMealPlanner: jest.fn().mockReturnValue(of(null)),
};

export const authServiceMock: IAuthService = {
  generateToken: jest.fn().mockReturnValue(
    of({
      data: userMock,
      token: 'token',
    }),
  ),
};

export const recipeServiceMockNull: IRecipeService = {
  create: jest.fn().mockReturnValue(of(null)),
  delete: jest.fn().mockReturnValue(of(null)),
  findById: jest.fn().mockReturnValue(of(null)),
  update: jest.fn().mockReturnValue(of(null)),
  findAllByUserId: jest.fn().mockReturnValue(of([null])),
};

export const ingredientServiceMockNull: IIngredientService = {
  create: jest.fn().mockReturnValue(of(null)),
  findAll: jest.fn().mockReturnValue(of([null])),
  findById: jest.fn().mockReturnValue(of(null)),
  findByName: jest.fn().mockReturnValue(of([null])),
  update: jest.fn().mockReturnValue(of(null)),
};

export const ingredientServiceMockError: IIngredientService = {
  create: jest.fn().mockReturnValue(of(null)),
  findAll: jest.fn().mockReturnValue(of([null])),
  findById: jest.fn().mockReturnValue(throwError(() => new Error())),
  findByName: jest.fn().mockReturnValue(of([null])),
  update: jest.fn().mockReturnValue(of(null)),
};

export const mealPlannerServiceMockNull: IMealPlannerService = {
  create: jest.fn().mockReturnValue(of(mealPlannerMock)),
  delete: jest.fn().mockReturnValue(of(mealPlannerMock)),
  findById: jest.fn().mockReturnValue(of(null)),
  update: jest.fn().mockReturnValue(of(mealPlannerMock)),
};
