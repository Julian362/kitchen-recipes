import { Controller } from '@nestjs/common';
import {
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from '..';

@Controller()
export class KitchenRecipesController {
  constructor(
    private readonly ingredientService: IngredientService,
    private readonly recipeService: RecipeService,
    private readonly mealPlannerService: MealPlannerService,
    private readonly userService: UserService,
  ) {}
}
