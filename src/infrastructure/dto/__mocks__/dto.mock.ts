import { CreateIngredientDto } from '../create-ingredient.dto';
import { CreateMealPlannerDto } from '../create-meal-planner.dto';
import { CreateRecipeDto } from '../create-recipe.dto';
import { CreateUserDto } from '../create-user.dto';
import { UpdateIngredientDto } from '../update-ingredient.dto';
import { UpdateMealPlannerDto } from '../update-meal-planner.dto';
import { UpdateRecipeDto } from '../update-recipe.dto';

export const mockCreateIngredientDto: CreateIngredientDto = {
  name: 'mockName',
  description: 'mockDescription',
  photoUrl: 'https://mockPhotoUrl.com/image.png',
};

export const mockCreateMealPlannerDto: CreateMealPlannerDto = {
  amount: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  name: 'mockName',
  notes: 'mockNotes',
};

export const mockCreateRecipeDto: CreateRecipeDto = {
  name: 'mockName',
  description: 'mockDescription',
  ingredients: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  photoUrl: 'mockPhotoUrl',
  steps: ['mockStep'],
  notes: 'mockNotes',
  servings: 1,
  nutritionInfo: 'mockNutritionInfo',
};

export const mockCreateUserDto: CreateUserDto = {
  email: 'example@mock.com',
  googleId: 'mockGoogleId',
  name: 'mockName',
  photoUrl: 'mockPhotoUrl',
};

export const mockUpdateIngredientDto: UpdateIngredientDto = {
  name: 'mockName',
  description: 'mockDescription',
  photoUrl: 'mockPhotoUrl',
};

export const mockUpdateMealPlannerDto: UpdateMealPlannerDto = {
  amount: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  name: 'mockName',
  notes: 'mockNotes',
};

export const mockUpdateRecipeDto: UpdateRecipeDto = {
  name: 'mockName',
  description: 'mockDescription',
  ingredients: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  photoUrl: 'mockPhotoUrl',
  steps: ['mockStep'],
  notes: 'mockNotes',
  servings: 1,
  nutritionInfo: 'mockNutritionInfo',
};
