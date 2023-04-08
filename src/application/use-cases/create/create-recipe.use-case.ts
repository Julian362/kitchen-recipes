import { IUseCase } from '@application/interface';
import { ICreateRecipeDto } from '@domain/dto';
import { RecipeDomainModel } from '@domain/models';
import { IIngredientService, IRecipeService } from '@domain/services';
import { NotFoundException } from '@nestjs/common';
import { Observable, catchError, map, of, throwError } from 'rxjs';

export class CreateRecipeUseCase implements IUseCase {
  constructor(
    private readonly service: IRecipeService,
    private readonly ingredientService: IIngredientService,
  ) {}

  execute(recipe: ICreateRecipeDto): Observable<RecipeDomainModel> {
    this.isExistIngredients(recipe).pipe(
      catchError((error) => {
        return throwError(() => new NotFoundException(error));
      }),
    );
    return this.service.create(recipe);
  }

  isExistIngredients(recipe: ICreateRecipeDto): Observable<boolean> {
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
