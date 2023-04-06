import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database';
import {
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from './services';

@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [
    MealPlannerService,
    UserService,
    RecipeService,
    IngredientService,
  ],
  exports: [MealPlannerService, UserService, RecipeService, IngredientService],
})
export class InfrastructureModule {}
