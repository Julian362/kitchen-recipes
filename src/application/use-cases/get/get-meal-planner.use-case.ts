import { IUseCase } from '@application/interface';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for get meal planner by id
 *
 * @export
 * @class GetMealPlannerUseCase
 * @typedef {GetMealPlannerUseCase}
 * @implements {IUseCase}
 */
export class GetMealPlannerUseCase implements IUseCase {
  /**
   * Creates an instance of GetMealPlannerUseCase.
   *
   * @constructor
   * @param {IMealPlannerService} service meal planner service
   */
  constructor(private readonly service: IMealPlannerService) {}

  /**
   * execute use case
   *
   * @param {string} id meal planner id
   * @returns {Observable<MealPlannerDomainModel>} meal planner domain model
   */
  execute(id: string): Observable<MealPlannerDomainModel> {
    return this.service.findById(id);
  }
}
