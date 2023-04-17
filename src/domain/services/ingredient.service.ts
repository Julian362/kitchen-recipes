import { IngredientDomainModel } from '@domain/models/ingredient.domain-model';
import { Observable } from 'rxjs';

/**
 * interface for the ingredient service
 *
 * @export
 * @interface IIngredientService
 * @typedef {IIngredientService}
 * @template Entity
 */
export interface IIngredientService<
  Entity extends IngredientDomainModel = IngredientDomainModel,
> {
  /**
   * create ingredient
   *
   * @param {Entity} entity ingredient domain model
   * @returns {Observable<Entity>} ingredient domain model
   */
  create(entity: Entity): Observable<Entity>;

  /**
   * find ingredient by id
   *
   * @param {string} id ingredient id
   * @returns {Observable<Entity>} ingredient domain model
   */
  findById(id: string): Observable<Entity>;

  /**
   * update ingredient by id
   *
   * @param {string} id ingredient id
   * @param {Entity} ingredient ingredient domain model
   * @returns {Observable<Entity>} ingredient domain model
   */
  update(id: string, ingredient: Entity): Observable<Entity>;

  /**
   * delete ingredient by id
   *
   * @returns {Observable<Entity[]>} ingredient domain model
   */
  findAll(): Observable<Entity[]>;

  /**
   * delete ingredient by id
   *
   * @param {string} name ingredient name
   * @returns {Observable<Entity>} ingredient domain model
   */
  findByName(name: string): Observable<Entity>;
}
