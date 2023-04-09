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

export class CreateRecipeUseCase implements IUseCase {
  constructor(
    private readonly service: IRecipeService,
    private readonly ingredientService: IIngredientService,
  ) {}

  execute(recipe: ICreateRecipeDto): Observable<RecipeDomainModel> {
    return this.isExistIngredients(recipe).pipe(
      switchMap((entidad) => {
        return entidad
          ? this.service.create(recipe)
          : throwError(() => new NotFoundException('Ingredient not found'));
      }),
    );
  }

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
