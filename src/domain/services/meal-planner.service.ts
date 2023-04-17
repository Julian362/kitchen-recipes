import { MealPlannerDomainModel } from '@domain/models/meal-planner.domain-model';
import { Observable } from 'rxjs';

/**
 * interface for the meal planner service
 *
 * @export
 * @interface IMealPlannerService
 * @typedef {IMealPlannerService}
 * @template Entity
 */
export interface IMealPlannerService<
  Entity extends MealPlannerDomainModel = MealPlannerDomainModel,
> {
  /**
   * create meal planner
   *
   * @param {Entity} entity meal planner domain model
   * @returns {Observable<Entity>} meal planner domain model
   */
  create(entity: Entity): Observable<Entity>;

  /**
   * find meal planner by id
   *
   * @param {string} id meal planner id
   * @returns {Observable<Entity>} meal planner domain model
   */
  findById(id: string): Observable<Entity>;

  /**
   * update meal planner by id
   *
   * @param {string} id meal planner id
   * @param {Entity} mealPlanner meal planner domain model
   * @returns {Observable<Entity>} meal planner domain model
   */
  update(id: string, mealPlanner: Entity): Observable<Entity>;

  /**
   * delete meal planner by id
   *
   * @param {string} id meal planner id
   * @returns {Observable<Entity>} meal planner domain model
   */
  delete(id: string): Observable<Entity>;
}
