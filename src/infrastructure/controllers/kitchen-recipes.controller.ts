import { Delegate } from '@application/delegate';
import { CreateIngredientDto } from '@infrastructure/dto/create-ingredient.dto';
import { CreateMealPlannerDto } from '@infrastructure/dto/create-meal-planner.dto';
import { CreateUserDto } from '@infrastructure/dto/create-user.dto';
import { UpdateIngredientDto } from '@infrastructure/dto/update-ingredient.dto';
import { UpdateMealPlannerDto } from '@infrastructure/dto/update-meal-planner.dto';
import { UpdateRecipesDto } from '@infrastructure/dto/update-recipes.dto';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  IngredientModel,
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from '..';
import { UserModel } from '../models/user.model';

@Controller()
export class KitchenRecipesController {
  constructor(
    private readonly ingredientService: IngredientService,
    private readonly recipeService: RecipeService,
    private readonly mealPlannerService: MealPlannerService,
    private readonly userService: UserService,
    private readonly delegate: Delegate,
  ) {
    this.delegate = new Delegate(
      this.recipeService,
      this.ingredientService,
      this.mealPlannerService,
      this.userService,
    );
  }

  @Get('ingredients')
  getIngredients(): Observable<IngredientModel[]> {
    this.delegate.toGetIngredient();
    return this.delegate.execute();
  }
  @Get('ingredient/:id')
  getIngredientById(@Param('id') id: string): Observable<IngredientModel> {
    this.delegate.toGetIngredient();
    return this.delegate.execute(id);
  }
  @Get('ingredient-name/:name')
  getIngredientByName(
    @Param('name') name: string,
  ): Observable<IngredientModel> {
    this.delegate.toGetIngredient();
    return this.delegate.execute(name);
  }
  @Get('meal-planner/:id')
  getMealPlanner(): Observable<MealPlannerModel> {
    this.delegate.toGetMealPlanner();
    return this.delegate.execute();
  }
  @Get('user/:id')
  getUser(): Observable<UserModel> {
    this.delegate.toGetUser();
    return this.delegate.execute();
  }

  @Delete('ingredient/:id')
  deleteIngredient(@Param('id') id: string): Observable<IngredientModel> {
    this.delegate.toDeleteIngredient();
    return this.delegate.execute(id);
  }
  @Delete('meal-planner/:id')
  deleteMealPlanner(@Param('id') id: string): Observable<MealPlannerModel> {
    this.delegate.toDeleteMealPlanner();
    return this.delegate.execute(id);
  }
  @Delete('recipe/:id')
  deleteRecipe(@Param('id') id: string): Observable<RecipesModel> {
    this.delegate.toDeleteRecipe();
    return this.delegate.execute(id);
  }
  @Delete('user/:id')
  deleteUser(@Param('id') id: string): Observable<UserModel> {
    this.delegate.toDeleteUser();
    return this.delegate.execute(id);
  }

  @Post('ingredient')
  createIngredient(
    @Body() ingredient: CreateIngredientDto,
  ): Observable<IngredientModel> {
    this.delegate.toCreateIngredient();
    return this.delegate.execute(ingredient);
  }
  @Post('meal-planner')
  createMealPlanner(
    @Body() mealPlanner: CreateMealPlannerDto,
  ): Observable<MealPlannerModel> {
    this.delegate.toCreateMealPlanner();
    return this.delegate.execute(mealPlanner);
  }
  @Post('recipe')
  createRecipe(@Body() recipe: CreateIngredientDto): Observable<RecipesModel> {
    this.delegate.toCreateRecipe();
    return this.delegate.execute(recipe);
  }
  @Post('user')
  createUser(@Body() user: CreateUserDto): Observable<UserModel> {
    this.delegate.toCreateUser();
    return this.delegate.execute(user);
  }

  @Put('ingredient/:id')
  updateIngredient(
    @Param('id') id: string,
    @Body() ingredient: UpdateIngredientDto,
  ): Observable<IngredientModel> {
    this.delegate.toUpdateIngredient();
    return this.delegate.execute(id, ingredient);
  }
  @Put('meal-planner/:id')
  updateMealPlanner(
    @Param('id') id: string,
    @Body() mealPlanner: UpdateMealPlannerDto,
  ): Observable<MealPlannerModel> {
    this.delegate.toUpdateMealPlanner();
    return this.delegate.execute(id, mealPlanner);
  }
  @Put('recipe/:id')
  updateRecipe(
    @Param('id') id: string,
    @Body() recipe: UpdateRecipesDto,
  ): Observable<RecipesModel> {
    this.delegate.toUpdateRecipe();
    return this.delegate.execute(id, recipe);
  }
}
