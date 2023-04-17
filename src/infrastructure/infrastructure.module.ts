import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo/mongo.module';
import { IngredientService } from './services/ingredient.service';
import { MealPlannerService } from './services/meal-planner.service';
import { RecipeService } from './services/recipe..service';
import { UserService } from './services/user.service';

/**
 * module for the infrastructure
 *
 * @export
 * @class InfrastructureModule
 * @typedef {InfrastructureModule}
 */
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
