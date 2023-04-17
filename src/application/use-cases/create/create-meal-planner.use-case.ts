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

/**
 * use case to create a meal planner
 *
 * @export
 * @class CreateMealPlannerUseCase
 * @typedef {CreateMealPlannerUseCase}
 * @implements {IUseCase}
 */
export class CreateMealPlannerUseCase implements IUseCase {
  /**
   * Creates an instance of CreateMealPlannerUseCase.
   *
   * @constructor
   * @param {IMealPlannerService} service meal planner service
   * @param {IIngredientService} ingredientService ingredient service
   * @param {IUserService} userService user service
   */
  constructor(
    private readonly service: IMealPlannerService,
    private readonly ingredientService: IIngredientService,
    private readonly userService: IUserService,
  ) {}

  /**
   * execute use case
   *
   * @param {string} id user id
   * @param {ICreateMealPlannerDto} mealPlanner meal planner dto
   * @returns {Observable<MealPlannerDomainModel>} meal planner created
   */
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

  /**
   * check if recipes exist
   *
   * @param {ICreateMealPlannerDto} mealPlanner meal planner dto
   * @returns {Observable<boolean>} true if exist, false if not
   */
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
