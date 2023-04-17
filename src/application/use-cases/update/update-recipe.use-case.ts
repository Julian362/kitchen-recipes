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

/**
 * update recipe use case
 *
 * @export
 * @class UpdateRecipeUseCase
 * @typedef {UpdateRecipeUseCase}
 * @implements {IUseCase}
 */
export class UpdateRecipeUseCase implements IUseCase {
  /**
   * Creates an instance of UpdateRecipeUseCase.
   *
   * @constructor
   * @param {IRecipeService} service recipe service
   * @param {IIngredientService} ingredientService ingredient service
   */
  constructor(
    private readonly service: IRecipeService,
    private readonly ingredientService: IIngredientService,
  ) {}

  /**
   * execute update recipe
   *
   * @param {string} _id - recipe id
   * @param {IUpdateRecipesDto} recipe - recipe
   * @returns {Observable<RecipeDomainModel>} - recipe
   */
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

  /**
   * Description placeholder
   *
   * @param {string} _id - recipe id
   * @returns {Observable<RecipeDomainModel>} - recipe
   */
  getRecipe(_id: string): Observable<RecipeDomainModel> {
    return this.service.findById(_id);
  }

  /**
   * Description placeholder
   *
   * @param {IUpdateRecipesDto} recipe - recipe
   * @returns {Observable<boolean>} - boolean
   */
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
