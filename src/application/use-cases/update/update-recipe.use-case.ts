import { IUseCase } from '@application/interface';
import { IUpdateRecipesDto } from '@domain/dto';
import { RecipeDomainModel } from '@domain/models';
import { IIngredientService, IRecipeService } from '@domain/services';
import { NotFoundException } from '@nestjs/common';
import {
  Observable,
  catchError,
  forkJoin,
  map,
  of,
  switchMap,
  throwError,
} from 'rxjs';

export class UpdateRecipeUseCase implements IUseCase {
  constructor(
    private readonly service: IRecipeService,
    private readonly ingredientService: IIngredientService,
  ) {}

  execute(
    _id: string,
    recipe: IUpdateRecipesDto,
  ): Observable<RecipeDomainModel> {
    return this.getRecipe(_id).pipe(
      switchMap((entity) => {
        const update = new RecipeDomainModel();
        update.name = recipe.name || entity.name;
        update.description = recipe.description || entity.description;
        update.photoUrl = recipe.photoUrl || entity.photoUrl;
        update.notes = recipe.notes || entity.notes;
        update.steps = recipe.steps || entity.steps;
        update.servings = recipe.servings || entity.servings;
        update.nutritionInfo = recipe.nutritionInfo || entity.nutritionInfo;
        return recipe.ingredients
          ? this.isExistIngredients(recipe).pipe(
              switchMap((entidad) => {
                update.ingredients = recipe.ingredients;
                return entidad
                  ? this.service.update(_id, update)
                  : throwError(
                      () => new NotFoundException('Ingredient not found'),
                    );
              }),
            )
          : this.service.update(_id, update);
      }),
    );
  }

  getRecipe(_id: string): Observable<RecipeDomainModel> {
    return this.service.findById(_id);
  }

  isExistIngredients(recipe: IUpdateRecipesDto): Observable<boolean> {
    const ids = recipe.ingredients.map((ingredient) => ingredient.ingredientId);

    const observables = ids.map((id) =>
      this.ingredientService.findById(id).pipe(
        map((entity) => {
          return entity !== null;
        }),
        catchError(() => of(false)),
      ),
    );

    return forkJoin(observables).pipe(
      map((results) =>
        results.every((result) => {
          return result;
        }),
      ),
    );
  }
}
