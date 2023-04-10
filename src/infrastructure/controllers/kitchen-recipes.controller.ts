import { Delegate } from '@application/delegate';
import { CreateIngredientDto } from '@infrastructure/dto/create-ingredient.dto';
import { CreateMealPlannerDto } from '@infrastructure/dto/create-meal-planner.dto';
import { CreateUserDto } from '@infrastructure/dto/create-user.dto';
import { UpdateIngredientDto } from '@infrastructure/dto/update-ingredient.dto';
import { UpdateMealPlannerDto } from '@infrastructure/dto/update-meal-planner.dto';
import { UpdateRecipeDto } from '@infrastructure/dto/update-recipe.dto';
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
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { IngredientModel } from '@infrastructure/models';
import {
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from '@infrastructure/services';
import { AuthGuard } from '@infrastructure/utils';
import { ValidateMongoId } from '@infrastructure/utils/pipes/mongo-id.pipe';
import { AuthService } from '@infrastructure/utils/services/auth.service';
import { UserModel } from '../models/user.model';

@Controller()
export class KitchenRecipesController {
  private readonly delegate: Delegate;
  constructor(
    private readonly ingredientService: IngredientService,
    private readonly recipeService: RecipeService,
    private readonly mealPlannerService: MealPlannerService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    this.delegate = new Delegate(
      recipeService,
      ingredientService,
      mealPlannerService,
      userService,
      authService,
    );
  }

  @UseGuards(AuthGuard)
  @Get('ingredient')
  getIngredients(): Observable<IngredientModel[]> {
    this.delegate.toGetAllIngredients();
    return this.delegate.execute();
  }

  @UseGuards(AuthGuard)
  @Get('recipes/:id')
  getRecipesByUserId(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<RecipesModel[]> {
    this.delegate.toGetRecipesByUser();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Get('ingredient/:id')
  getIngredientById(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<IngredientModel> {
    this.delegate.toGetIngredient();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Get('ingredient-name/:name')
  getIngredientByName(
    @Param('name') name: string,
  ): Observable<IngredientModel> {
    this.delegate.toGetIngredientByNames();
    return this.delegate.execute(name);
  }

  @UseGuards(AuthGuard)
  @Get('meal-planner/:id')
  getMealPlanner(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<MealPlannerModel> {
    this.delegate.toGetMealPlanner();
    return this.delegate.execute(id);
  }

  @Get('user/:id')
  getUser(@Param('id') id: string): Observable<{
    data: UserModel;
    token: string;
  }> {
    this.delegate.toGetUser();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Get('recipe/:id')
  getRecipes(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<RecipesModel[]> {
    this.delegate.toGetRecipe();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Delete('meal-planner/:id')
  deleteMealPlanner(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<MealPlannerModel> {
    this.delegate.toDeleteMealPlanner();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Delete('recipe/:id')
  deleteRecipe(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<RecipesModel> {
    this.delegate.toDeleteRecipe();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Delete('user/:id')
  deleteUser(@Param('id', ValidateMongoId) id: string): Observable<UserModel> {
    this.delegate.toDeleteUser();
    return this.delegate.execute(id);
  }

  @UseGuards(AuthGuard)
  @Post('ingredient')
  createIngredient(
    @Body() ingredient: CreateIngredientDto,
  ): Observable<IngredientModel> {
    this.delegate.toCreateIngredient();
    return this.delegate.execute(ingredient);
  }

  @UseGuards(AuthGuard)
  @Post('meal-planner/:id')
  createMealPlanner(
    @Param('id', ValidateMongoId) id: string,
    @Body() mealPlanner: CreateMealPlannerDto,
  ): Observable<MealPlannerModel> {
    this.delegate.toCreateMealPlanner();
    return this.delegate.execute(id, mealPlanner);
  }

  @UseGuards(AuthGuard)
  @Post('recipe')
  createRecipe(@Body() recipe: CreateIngredientDto): Observable<RecipesModel> {
    this.delegate.toCreateRecipe();
    return this.delegate.execute(recipe);
  }

  @Post('user')
  createUser(@Body() user: CreateUserDto): Observable<{
    data: UserModel;
    token: string;
  }> {
    this.delegate.toCreateUser();
    return this.delegate.execute(user);
  }

  @UseGuards(AuthGuard)
  @Put('ingredient/:id')
  updateIngredient(
    @Param('id', ValidateMongoId) id: string,
    @Body() ingredient: UpdateIngredientDto,
  ): Observable<IngredientModel> {
    this.delegate.toUpdateIngredient();
    return this.delegate.execute(id, ingredient);
  }

  @UseGuards(AuthGuard)
  @Put('meal-planner/:id')
  updateMealPlanner(
    @Param('id', ValidateMongoId) id: string,
    @Body() mealPlanner: UpdateMealPlannerDto,
  ): Observable<MealPlannerModel> {
    this.delegate.toUpdateMealPlanner();
    return this.delegate.execute(id, mealPlanner);
  }

  @UseGuards(AuthGuard)
  @Put('recipe/:id')
  updateRecipe(
    @Param('id', ValidateMongoId) id: string,
    @Body() recipe: UpdateRecipeDto,
  ): Observable<RecipesModel> {
    this.delegate.toUpdateRecipe();
    return this.delegate.execute(id, recipe);
  }
}
