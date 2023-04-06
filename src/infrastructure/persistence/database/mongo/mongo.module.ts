import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config';
import {
  IngredientRepository,
  MealPlannerRepository,
  RecipeRepository,
  UserRepository,
} from './repositories';
import {
  IngredientMongo,
  IngredientsSchema,
  MealPlannerMongo,
  MealPlannerSchema,
  RecipeMongo,
  RecipesSchema,
  UserMongo,
  UserSchema,
} from './schemas';
import {
  IngredientMongoService,
  MealPlannerMongoService,
  RecipeMongoService,
  UserMongoService,
} from './services';

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
