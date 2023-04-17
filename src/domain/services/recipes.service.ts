import { RecipeDomainModel } from '@domain/models/recipes.domain-model';
import { Observable } from 'rxjs';

/**
 * interface for the recipe service
 *
 * @export
 * @interface IRecipeService
 * @typedef {IRecipeService}
 * @template Entity
 */
export interface IRecipeService<
  Entity extends RecipeDomainModel = RecipeDomainModel,
> {
  /**
   * create recipe
   *
   * @param {Entity} entity recipe domain model
   * @returns {Observable<Entity>} recipe domain model
   */
  create(entity: Entity): Observable<Entity>;

  /**
   * find recipe by id
   *
   * @param {string} id recipe id
   * @returns {Observable<Entity>} recipe domain model
   */
  findById(id: string): Observable<Entity>;

  /**
   * update recipe by id
   *
   * @param {string} id recipe id
   * @param {Entity} recipe recipe domain model
   * @returns {Observable<Entity>} recipe domain model
   */
  update(id: string, recipe: Entity): Observable<Entity>;

  /**
   * delete recipe by id
   *
   * @param {string} id recipe id
   * @returns {Observable<Entity>} recipe domain model
   */
  delete(id: string): Observable<Entity>;

  /**
   * find all recipes
   *
   * @param {string} id user id
   * @returns {Observable<Entity[]>} recipe domain model
   */
  findAllByUserId(id: string): Observable<Entity[]>;
}
