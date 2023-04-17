import { IUseCase } from '@application/interface';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for delete meal planner
 *
 * @export
 * @class DeleteMealPlannerUseCase
 * @typedef {DeleteMealPlannerUseCase}
 * @implements {IUseCase}
 */
export class DeleteMealPlannerUseCase implements IUseCase {
  /**
   * Creates an instance of DeleteMealPlannerUseCase.
   *
   * @constructor
   * @param {IMealPlannerService} service meal planner service
   */
  constructor(private readonly service: IMealPlannerService) {}

  /**
   * execute use case
   *
   * @param {string} _id meal planner id
   * @returns {Observable<MealPlannerDomainModel>} meal planner domain model
   */
  execute(_id: string): Observable<MealPlannerDomainModel> {
    return this.service.delete(_id);
  }
}
