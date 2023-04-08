import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongo.config';
import { IngredientRepository } from './repositories/ingredient.repository';
import { MealPlannerRepository } from './repositories/meal-planner.repository';
import { RecipeRepository } from './repositories/recipe.repository';
import { UserRepository } from './repositories/user.repository';
import {
  IngredientMongo,
  IngredientsSchema,
} from './schemas/ingredient.schema';
import {
  MealPlannerMongo,
  MealPlannerSchema,
} from './schemas/meal-planner.schema';
import { RecipeMongo, RecipesSchema } from './schemas/recipe.schema';
import { UserMongo, UserSchema } from './schemas/user.schema';
import { IngredientMongoService } from './services/ingredient.service';
import { MealPlannerMongoService } from './services/meal-planner.service';
import { RecipeMongoService } from './services/recipe.service';
import { UserMongoService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: UserMongo.name,
        schema: UserSchema,
      },
      {
        name: IngredientMongo.name,
        schema: IngredientsSchema,
      },
      {
        name: MealPlannerMongo.name,
        schema: MealPlannerSchema,
      },
      {
        name: RecipeMongo.name,
        schema: RecipesSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [
    MongooseConfigService,
    MealPlannerMongoService,
    RecipeMongoService,
    UserMongoService,
    IngredientMongoService,
    MealPlannerRepository,
    RecipeRepository,
    UserRepository,
    IngredientRepository,
  ],
  exports: [
    MealPlannerMongoService,
    RecipeMongoService,
    UserMongoService,
    IngredientMongoService,
    MealPlannerRepository,
    RecipeRepository,
    UserRepository,
    IngredientRepository,
  ],
})
export class MongoModule {}
