import { IUseCase } from '@application/interface';
import {
  CreateIngredientUseCase,
  CreateMealPlannerUseCase,
  CreateRecipeUseCase,
  CreateUserUseCase,
  DeleteMealPlannerUseCase,
  DeleteRecipeUseCase,
  DeleteUserUseCase,
  GetAllIngredientUseCase,
  GetIngredientByNameUseCase,
  GetIngredientUseCase,
  GetMealPlannerUseCase,
  GetRecipeUseCase,
  GetUserUseCase,
  UpdateIngredientUseCase,
  UpdateMealPlannerUseCase,
  UpdateRecipeUseCase,
} from '@application/use-cases';
import { GetAllRecipesUseCase } from '@application/use-cases/get/get-all-recipes.use-case';
import {
  IIngredientService,
  IMealPlannerService,
  IRecipeService,
  IUserService,
} from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { Observable } from 'rxjs';

/**
 * delegate class for use cases
 *
 * @export
 * @class Delegate
 * @typedef {Delegate}
 * @implements {IUseCase}
 */
export class Delegate implements IUseCase {
  /**
   * creates an instance of Delegate
   *
   * @constructor
   * @param {IRecipeService} recipesService - recipe service
   * @param {IIngredientService} ingredientService - ingredient service
   * @param {IMealPlannerService} mealPlannerService - meal planner service
   * @param {IUserService} userService - user service
   * @param {IAuthService} authService - auth service
   */
  constructor(
    private readonly recipesService: IRecipeService,
    private readonly ingredientService: IIngredientService,
    private readonly mealPlannerService: IMealPlannerService,
    private readonly userService: IUserService,
    private readonly authService: IAuthService,
  ) {}

  /**
   * instance of use case to delegate
   *
   * @private
   * @type {IUseCase}
   */
  private delegate: IUseCase;

  /**
   * execute use case
   *
   * @template Response
   * @param {...any[]} args
   * @returns {Observable<Response>}
   */
  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  /**
   *  instance of use case CreateIngredientUseCase to delegate
   */
  toCreateIngredient(): void {
    this.delegate = new CreateIngredientUseCase(this.ingredientService);
  }
  /**
   * instance of use case CreateRecipeUseCase to delegate
   */
  toCreateRecipe(): void {
    this.delegate = new CreateRecipeUseCase(
      this.recipesService,
      this.ingredientService,
    );
  }
  /**
   * instance of use case CreateMealPlannerUseCase to delegate
   */
  toCreateMealPlanner(): void {
    this.delegate = new CreateMealPlannerUseCase(
      this.mealPlannerService,
      this.ingredientService,
      this.userService,
    );
  }
  /**
   *  instance of use case CreateUserUseCase to delegate
   */
  toCreateUser(): void {
    this.delegate = new CreateUserUseCase(this.userService, this.authService);
  }

  /**
   *  instance of use case DeleteIngredientUseCase to delegate
   */
  toDeleteRecipe(): void {
    this.delegate = new DeleteRecipeUseCase(this.recipesService);
  }
  /**
   *  instance of use case DeleteMealPlannerUseCase to delegate
   */
  toDeleteMealPlanner(): void {
    this.delegate = new DeleteMealPlannerUseCase(this.mealPlannerService);
  }
  /**
   *  instance of use case DeleteUserUseCase to delegate
   */
  toDeleteUser(): void {
    this.delegate = new DeleteUserUseCase(this.userService);
  }

  /**
   * instance of use case UpdateIngredientUseCase to delegate
   */
  toUpdateIngredient(): void {
    this.delegate = new UpdateIngredientUseCase(this.ingredientService);
  }
  /**
   *  instance of use case UpdateRecipeUseCase to delegate
   */
  toUpdateRecipe(): void {
    this.delegate = new UpdateRecipeUseCase(
      this.recipesService,
      this.ingredientService,
    );
  }
  /**
   * instance of use case UpdateMealPlannerUseCase to delegate
   */
  toUpdateMealPlanner(): void {
    this.delegate = new UpdateMealPlannerUseCase(
      this.mealPlannerService,
      this.ingredientService,
    );
  }

  /**
   *  instance of use case GetAllIngredientUseCase to delegate
   */
  toGetAllIngredients(): void {
    this.delegate = new GetAllIngredientUseCase(this.ingredientService);
  }
  /**
   * instance of use case GetIngredientUseCase to delegate
   */
  toGetIngredient(): void {
    this.delegate = new GetIngredientUseCase(this.ingredientService);
  }
  /**
   * instance of use case GetIngredientByNameUseCase to delegate
   */
  toGetIngredientByNames(): void {
    this.delegate = new GetIngredientByNameUseCase(this.ingredientService);
  }
  /**
   * instance of use case GetMealPlannerUseCase to delegate
   */
  toGetMealPlanner(): void {
    this.delegate = new GetMealPlannerUseCase(this.mealPlannerService);
  }
  /**
   * instance of use case GetRecipeUseCase to delegate
   */
  toGetRecipe(): void {
    this.delegate = new GetRecipeUseCase(this.recipesService);
  }
  /**
   * instance of use case GetUserUseCase to delegate
   */
  toGetUser(): void {
    this.delegate = new GetUserUseCase(this.userService, this.authService);
  }
  /**
   * instance of use case GetAllRecipesUseCase to delegate
   */
  toGetRecipesByUser(): void {
    this.delegate = new GetAllRecipesUseCase(this.recipesService);
  }
}
