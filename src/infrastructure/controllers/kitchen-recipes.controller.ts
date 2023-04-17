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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserModel } from '../models/user.model';

/**
 * kitchen recipes controller
 *
 * @export
 * @class KitchenRecipesController
 * @typedef {KitchenRecipesController}
 */
@ApiTags('Kitchen Recipes')
@Controller()
export class KitchenRecipesController {
  /**
   * delegate instance
   *
   * @private
   * @readonly
   * @type {Delegate}
   */
  private readonly delegate: Delegate;
  /**
   * Creates an instance of KitchenRecipesController.
   *
   * @constructor
   * @param {IngredientService} ingredientService ingredient service
   * @param {RecipeService} recipeService recipe service
   * @param {MealPlannerService} mealPlannerService meal planner service
   * @param {UserService} userService user service
   * @param {AuthService} authService auth service
   */
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

  /**
   * get ingredients
   *
   * @returns {Observable<IngredientModel[]>} ingredient model
   */
  @ApiOperation({ summary: 'Get all ingredients' })
  @UseGuards(AuthGuard)
  @Get('ingredient')
  getIngredients(): Observable<IngredientModel[]> {
    this.delegate.toGetAllIngredients();
    return this.delegate.execute();
  }

  /**
   * get recipes
   *
   * @param {string} id user id
   * @returns {Observable<RecipesModel[]>} recipe model
   */
  @ApiOperation({ summary: 'Get recipe by user id' })
  @UseGuards(AuthGuard)
  @Get('recipes/:id')
  getRecipesByUserId(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<RecipesModel[]> {
    this.delegate.toGetRecipesByUser();
    return this.delegate.execute(id);
  }

  /**
   * get ingredients by recipe id
   *
   * @param {string} id recipe id
   * @returns {Observable<IngredientModel>} ingredient model
   */
  @ApiOperation({ summary: 'Get ingredient by recipe id' })
  @UseGuards(AuthGuard)
  @Get('ingredient/:id')
  getIngredientById(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<IngredientModel> {
    this.delegate.toGetIngredient();
    return this.delegate.execute(id);
  }

  /**
   * get ingredients by recipe name
   *
   * @param {string} name recipe name
   * @returns {Observable<IngredientModel>} ingredient model
   */
  @ApiOperation({ summary: 'Get ingredient by recipe name' })
  @UseGuards(AuthGuard)
  @Get('ingredient-name/:name')
  getIngredientByName(
    @Param('name') name: string,
  ): Observable<IngredientModel> {
    this.delegate.toGetIngredientByNames();
    return this.delegate.execute(name);
  }

  /**
   * get meal planner
   *
   * @param {string} id meal-planner id
   * @returns {Observable<MealPlannerModel>} meal planner model
   */
  @ApiOperation({ summary: 'Get meal planner by id' })
  @UseGuards(AuthGuard)
  @Get('meal-planner/:id')
  getMealPlanner(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<MealPlannerModel> {
    this.delegate.toGetMealPlanner();
    return this.delegate.execute(id);
  }

  /**
   * get user
   *
   * @param {string} id user id
   * @returns {Observable<{
   *  data: UserModel;
   *  token: string;
   *}>} user model
   */
  @ApiOperation({ summary: 'Get user by id' })
  @Get('user/:id')
  getUser(@Param('id') id: string): Observable<{
    data: UserModel;
    token: string;
  }> {
    this.delegate.toGetUser();
    return this.delegate.execute(id);
  }

  /**
   * get recipes
   *
   * @param {string} id recipe id
   * @returns {Observable<RecipesModel[]>} recipe model
   */
  @ApiOperation({ summary: 'Get all recipes' })
  @UseGuards(AuthGuard)
  @Get('recipe/:id')
  getRecipes(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<RecipesModel[]> {
    this.delegate.toGetRecipe();
    return this.delegate.execute(id);
  }

  /**
   * delete meal planner
   *
   * @param {string} id recipe id
   * @returns {Observable<MealPlannerModel>} meal planner model
   */
  @ApiOperation({ summary: 'Delete meal planner by id' })
  @UseGuards(AuthGuard)
  @Delete('meal-planner/:id')
  deleteMealPlanner(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<MealPlannerModel> {
    this.delegate.toDeleteMealPlanner();
    return this.delegate.execute(id);
  }

  /**
   * delete recipe
   *
   * @param {string} id recipe id
   * @returns {Observable<RecipesModel>} recipe model
   */
  @ApiOperation({ summary: 'Delete recipe by id' })
  @UseGuards(AuthGuard)
  @Delete('recipe/:id')
  deleteRecipe(
    @Param('id', ValidateMongoId) id: string,
  ): Observable<RecipesModel> {
    this.delegate.toDeleteRecipe();
    return this.delegate.execute(id);
  }

  /**
   * delete user
   *
   * @param {string} id user id
   * @returns {Observable<UserModel>} user model
   */
  @ApiOperation({ summary: 'Delete user by id' })
  @UseGuards(AuthGuard)
  @Delete('user/:id')
  deleteUser(@Param('id', ValidateMongoId) id: string): Observable<UserModel> {
    this.delegate.toDeleteUser();
    return this.delegate.execute(id);
  }

  /**
   * create ingredient
   *
   * @param {CreateIngredientDto} ingredient ingredient dto
   * @returns {Observable<IngredientModel>} ingredient model
   */
  @ApiOperation({ summary: 'Create ingredient' })
  @UseGuards(AuthGuard)
  @Post('ingredient')
  createIngredient(
    @Body() ingredient: CreateIngredientDto,
  ): Observable<IngredientModel> {
    this.delegate.toCreateIngredient();
    return this.delegate.execute(ingredient);
  }

  /**
   * create meal planner
   *
   * @param {string} id user id
   * @param {CreateMealPlannerDto} mealPlanner meal planner dto
   * @returns {Observable<MealPlannerModel>} meal planner model
   */
  @ApiOperation({ summary: 'Create meal planner' })
  @UseGuards(AuthGuard)
  @Post('meal-planner/:id')
  createMealPlanner(
    @Param('id', ValidateMongoId) id: string,
    @Body() mealPlanner: CreateMealPlannerDto,
  ): Observable<MealPlannerModel> {
    this.delegate.toCreateMealPlanner();
    return this.delegate.execute(id, mealPlanner);
  }

  /**
   * create recipe
   *
   * @param {CreateIngredientDto} recipe recipe dto
   * @returns {Observable<RecipesModel>} recipe model
   */
  @ApiOperation({ summary: 'Create recipe' })
  @UseGuards(AuthGuard)
  @Post('recipe')
  createRecipe(@Body() recipe: CreateIngredientDto): Observable<RecipesModel> {
    this.delegate.toCreateRecipe();
    return this.delegate.execute(recipe);
  }

  /**
   * create user
   *
   * @param {CreateUserDto} user user dto
   * @returns {Observable<{
   *  data: UserModel;
   *  token: string;
   *}>} user model
   */
  @ApiOperation({ summary: 'Create user' })
  @Post('user')
  createUser(@Body() user: CreateUserDto): Observable<{
    data: UserModel;
    token: string;
  }> {
    this.delegate.toCreateUser();
    return this.delegate.execute(user);
  }

  /**
   * update ingredient
   *
   * @param {string} id
   * @param {UpdateIngredientDto} ingredient ingredient dto
   * @returns {Observable<IngredientModel>} ingredient model
   */
  @ApiOperation({ summary: 'Update ingredient by id' })
  @UseGuards(AuthGuard)
  @Put('ingredient/:id')
  updateIngredient(
    @Param('id', ValidateMongoId) id: string,
    @Body() ingredient: UpdateIngredientDto,
  ): Observable<IngredientModel> {
    this.delegate.toUpdateIngredient();
    return this.delegate.execute(id, ingredient);
  }

  /**
   * update meal planner
   *
   * @param {string} id meal planner id
   * @param {UpdateMealPlannerDto} mealPlanner meal planner dto
   * @returns {Observable<MealPlannerModel>} meal planner model
   */
  @ApiOperation({ summary: 'Update meal planner by id' })
  @UseGuards(AuthGuard)
  @Put('meal-planner/:id')
  updateMealPlanner(
    @Param('id', ValidateMongoId) id: string,
    @Body() mealPlanner: UpdateMealPlannerDto,
  ): Observable<MealPlannerModel> {
    this.delegate.toUpdateMealPlanner();
    return this.delegate.execute(id, mealPlanner);
  }

  /**
   * update recipe
   *
   * @param {string} id recipe id
   * @param {UpdateRecipeDto} recipe recipe dto
   * @returns {Observable<RecipesModel>} recipe model
   */
  @ApiOperation({ summary: 'Update recipe by id' })
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
