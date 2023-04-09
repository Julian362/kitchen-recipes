import { IUseCase } from '@application/interface';
import { ICreateMealPlannerDto } from '@domain/dto';
import { MealPlannerDomainModel } from '@domain/models';
import {
  IIngredientService,
  IMealPlannerService,
  IUserService,
} from '@domain/services';
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

export class CreateMealPlannerUseCase implements IUseCase {
  constructor(
    private readonly service: IMealPlannerService,
    private readonly ingredientService: IIngredientService,
    private readonly userService: IUserService,
  ) {}

  execute(
    id: string,
    mealPlanner: ICreateMealPlannerDto,
  ): Observable<MealPlannerDomainModel> {
    return this.isExistRecipes(mealPlanner).pipe(
      switchMap((entidad) => {
        return entidad
          ? this.service.create(mealPlanner).pipe(
              map((entity) => {
                this.userService.addMealPlanner(id, entity);
                return entity;
              }),
            )
          : throwError(() => new NotFoundException('Recipe not found'));
      }),
    );
  }

  isExistRecipes(mealPlanner: ICreateMealPlannerDto): Observable<boolean> {
    const ids = mealPlanner.amount.map((ingredient) => ingredient.ingredientId);
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
