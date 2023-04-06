import {
  CreateIngredientUseCase,
  CreateMealPlannerUseCase,
  CreateRecipeUseCase,
  CreateUserUseCase,
  DeleteIngredientUseCase,
  DeleteRecipeUseCase,
  GetAllIngredientUseCase,
  GetIngredientByNameUseCase,
  GetMealPlannerUseCase,
  GetRecipeUseCase,
  GetUserUseCase,
  UpdateIngredientUseCase,
  UpdateMealPlannerUseCase,
  UpdateRecipeUseCase,
} from '@application/use-cases';
import {
  IIngredientService,
  IMealPlannerService,
  IRecipeService,
  IUserService,
} from '@domain/services';
import { Observable } from 'rxjs';
import { IUseCase } from '../interface/use-case.interface';

export class Delegate implements IUseCase {
  constructor(
    private readonly recipesService: IRecipeService,
    private readonly ingredientService: IIngredientService,
    private readonly mealPlannerService: IMealPlannerService,
    private readonly userService: IUserService,
  ) {}

  private delegate: IUseCase;

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateIngredient(): void {
    this.delegate = new CreateIngredientUseCase(this.ingredientService);
  }
  toCreateRecipe(): void {
    this.delegate = new CreateRecipeUseCase(this.recipesService);
  }
  toCreateMealPlanner(): void {
    this.delegate = new CreateMealPlannerUseCase(this.mealPlannerService);
  }
  toCreateUser(): void {
    this.delegate = new CreateUserUseCase(this.userService);
  }

  toDeleteIngredient(): void {
    this.delegate = new DeleteIngredientUseCase(this.ingredientService);
  }
  toDeleteRecipe(): void {
    this.delegate = new DeleteRecipeUseCase(this.recipesService);
  }
  toDeleteMealPlanner(): void {
    this.delegate = new CreateMealPlannerUseCase(this.mealPlannerService);
  }
  toDeleteUser(): void {
    this.delegate = new CreateUserUseCase(this.userService);
  }

  toUpdateIngredient(): void {
    this.delegate = new UpdateIngredientUseCase(this.ingredientService);
  }
  toUpdateRecipe(): void {
    this.delegate = new UpdateRecipeUseCase(this.recipesService);
  }
  toUpdateMealPlanner(): void {
    this.delegate = new UpdateMealPlannerUseCase(this.mealPlannerService);
  }

  toGetAllIngredients(): void {
    this.delegate = new GetAllIngredientUseCase(this.ingredientService);
  }
  toGetIngredient(): void {
    this.delegate = new GetIngredientByNameUseCase(this.ingredientService);
  }
  toGetIngredientByNames(): void {
    this.delegate = new GetIngredientByNameUseCase(this.ingredientService);
  }
  toGetMealPlanner(): void {
    this.delegate = new GetMealPlannerUseCase(this.mealPlannerService);
  }
  toGetRecipe(): void {
    this.delegate = new GetRecipeUseCase(this.recipesService);
  }
  toGetUser(): void {
    this.delegate = new GetUserUseCase(this.userService);
  }
}
