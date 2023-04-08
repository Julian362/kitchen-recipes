import { IUseCase } from '@application/interface';
import { IUpdateRecipesDto } from '@domain/dto';
import { RecipeDomainModel } from '@domain/models';
import { IIngredientService, IRecipeService } from '@domain/services';
import { NotFoundException } from '@nestjs/common';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';

export class UpdateRecipeUseCase implements IUseCase {
  constructor(
    private readonly service: IRecipeService,
    private readonly ingredientService: IIngredientService,
  ) {}

  execute(
    _id: string,
    recipe: IUpdateRecipesDto,
  ): Observable<RecipeDomainModel> {
    !recipe.ingredients
      ? this.isExistIngredients(recipe).pipe(
          catchError((error) => {
            return throwError(() => new NotFoundException(error));
          }),
        )
      : of(true);
    return this.getRecipe(_id).pipe(
      switchMap((entity) => {
        const update = new RecipeDomainModel();
        update.name = recipe.name || entity.name;
        update.description = recipe.description || entity.description;
        update.ingredients = recipe.ingredients || entity.ingredients;
        update.photoUrl = recipe.photoUrl || entity.photoUrl;
        update.notes = recipe.notes || entity.notes;
        update.steps = recipe.steps || entity.steps;
        update.servings = recipe.servings || entity.servings;
        update.nutritionInfo = recipe.nutritionInfo || entity.nutritionInfo;
        return this.service.update(_id, update);
      }),
      catchError(() => {
        throw new Error('Ingredient not found');
      }),
    );
  }

  getRecipe(_id: string): Observable<RecipeDomainModel> {
    return this.service.findById(_id);
  }

  isExistIngredients(recipe: IUpdateRecipesDto): Observable<boolean> {
    const result = recipe.ingredients.every((ingredient) =>
      this.ingredientService.findById(ingredient.ingredientId).pipe(
        map((entity) => {
          return entity ? true : false;
        }),
      ),
    );

    return result
      ? of(true)
      : throwError(() => new NotFoundException('Ingredient not found'));
  }
}
