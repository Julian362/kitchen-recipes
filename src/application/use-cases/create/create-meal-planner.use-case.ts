import { IUseCase } from '@application/interface';
import { ICreateMealPlannerDto } from '@domain/dto';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService, IRecipeService } from '@domain/services';
import { NotFoundException } from '@nestjs/common';
import { Observable, catchError, map, of, throwError } from 'rxjs';

export class CreateMealPlannerUseCase implements IUseCase {
  constructor(
    private readonly service: IMealPlannerService,
    private readonly recipeService: IRecipeService,
  ) {}

  execute(
    mealPlanner: ICreateMealPlannerDto,
  ): Observable<MealPlannerDomainModel> {
    this.isExistRecipes(mealPlanner).pipe(
      catchError((error) => {
        return throwError(() => new NotFoundException(error));
      }),
    );
    return this.service.create(mealPlanner);
  }

  isExistRecipes(mealPlanner: ICreateMealPlannerDto): Observable<boolean> {
    const result = mealPlanner.amount.every((recipe) =>
      this.recipeService.findById(recipe.ingredientId).pipe(
        map((entity) => {
          return entity ? true : false;
        }),
      ),
    );

    return result
      ? of(true)
      : throwError(() => new NotFoundException('Recipe not found'));
  }
}
