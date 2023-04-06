import { Module } from '@nestjs/common';
import {
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from '..';
import { MongoModule } from './database';

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
export class PersistenceModule {}
