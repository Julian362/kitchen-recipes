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

/**
 * update meal planner use case
 *
 * @export
 * @class UpdateMealPlannerUseCase
 * @typedef {UpdateMealPlannerUseCase}
 * @implements {IUseCase}
 */
export class UpdateMealPlannerUseCase implements IUseCase {
  /**
   * Creates an instance of UpdateMealPlannerUseCase.
   *
   * @constructor
   * @param {IMealPlannerService} service meal planner service
   * @param {IIngredientService} ingredientService ingredient service
   */
  constructor(
    private readonly service: IMealPlannerService,
    private readonly ingredientService: IIngredientService,
  ) {}

  /**
   * execute update meal planner
   *
   * @param {string} _id - meal planner id
   * @param {ICreateMealPlannerDto} mealPlanner - meal planner
   * @returns {Observable<MealPlannerDomainModel>} - meal planner
   */
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

  /**
   * check if ingredients exist
   *
   * @param {ICreateMealPlannerDto} mealPlanner - meal planner
   * @returns {Observable<boolean>} - true if exist
   */
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
