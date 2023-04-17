import { UserDomainModel } from '@domain/models/user.domain-model';
import { Observable } from 'rxjs';
import { IMealPlannerDomainModel } from '..';

/**
 * interface for the user service
 *
 * @export
 * @interface IUserService
 * @typedef {IUserService}
 * @template Entity
 */
export interface IUserService<
  Entity extends UserDomainModel = UserDomainModel,
> {
  /**
   * create user
   *
   * @param {Entity} entity user domain model
   * @returns {Observable<Entity>} user domain model
   */
  create(entity: Entity): Observable<Entity>;

  /**
   * find user by id
   *
   * @param {string} id user id
   * @returns {Observable<Entity>} user domain model
   */
  findById(id: string): Observable<Entity>;

  /**
   * delete user by id
   *
   * @param {string} id user id
   * @returns {Observable<Entity>} user domain model
   */
  delete(id: string): Observable<Entity>;

  /**
   * add meal planner to user
   *
   * @param {string} userId user id
   * @param {IMealPlannerDomainModel} mealPlanner meal planner domain model
   * @returns {Observable<Entity>} user domain model
   */
  addMealPlanner(
    userId: string,
    mealPlanner: IMealPlannerDomainModel,
  ): Observable<Entity>;
}
