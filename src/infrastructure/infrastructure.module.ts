import { Module } from '@nestjs/common';
import { KitchenRecipesController } from './controllers';
import { MongoModule } from './persistence/database';
import {
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from './services';

@Module({
  imports: [MongoModule],
  controllers: [KitchenRecipesController],
  providers: [
    MealPlannerService,
    UserService,
    RecipeService,
    IngredientService,
  ],
  exports: [MealPlannerService, UserService, RecipeService, IngredientService],
})
export class InfrastructureModule {}
