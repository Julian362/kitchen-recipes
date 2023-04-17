import { IUseCase } from '@application/interface';
import { ICreateRecipeDto } from '@domain/dto';
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
 * use case for create recipe
 *
 * @export
 * @class CreateRecipeUseCase
 * @typedef {CreateRecipeUseCase}
 * @implements {IUseCase}
 */
export class CreateRecipeUseCase implements IUseCase {
  /**
   * Creates an instance of CreateRecipeUseCase.
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
   * execute use case
   *
   * @param {ICreateRecipeDto} recipe recipe dto
   * @returns {Observable<RecipeDomainModel>} recipe created
   */
  execute(recipe: ICreateRecipeDto): Observable<RecipeDomainModel> {
    return this.isExistIngredients(recipe).pipe(
      switchMap((entidad) => {
        return entidad
          ? this.service.create(recipe)
          : throwError(() => new NotFoundException('Ingredient not found'));
      }),
    );
  }

  /**
   * check if ingredients exist
   *
   * @param {ICreateRecipeDto} recipe recipe dto
   * @returns {Observable<boolean>} true if exist, false if not
   */
  isExistIngredients(recipe: ICreateRecipeDto): Observable<boolean> {
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
