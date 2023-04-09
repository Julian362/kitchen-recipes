import { IUseCase } from '@application/interface';
import { ICreateMealPlannerDto } from '@domain/dto';
import { MealPlannerDomainModel } from '@domain/models';
import { IIngredientService, IMealPlannerService } from '@domain/services';
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

export class UpdateMealPlannerUseCase implements IUseCase {
  constructor(
    private readonly service: IMealPlannerService,
    private readonly ingredientService: IIngredientService,
  ) {}

  execute(
    _id: string,
    mealPlanner: ICreateMealPlannerDto,
  ): Observable<MealPlannerDomainModel> {
    return this.service.findById(_id).pipe(
      switchMap((entity) => {
        const updateMealPlanner = new MealPlannerDomainModel();
        updateMealPlanner.name = mealPlanner.name || entity.name;
        updateMealPlanner.notes = mealPlanner.notes || entity.notes;
        return mealPlanner.amount
          ? this.isExistIngredients(mealPlanner).pipe(
              switchMap((entidad) => {
                updateMealPlanner.amount = mealPlanner.amount;
                return entidad
                  ? this.service.update(_id, updateMealPlanner)
                  : throwError(
                      () => new NotFoundException('Ingredient not found'),
                    );
              }),
            )
          : this.service.update(_id, updateMealPlanner);
      }),
    );
  }

  isExistIngredients(mealPlanner: ICreateMealPlannerDto): Observable<boolean> {
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
