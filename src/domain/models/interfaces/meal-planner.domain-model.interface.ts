import { IIngredientDomainModel } from './ingredient.domain-model.interface';

/**
 * interface for meal planner domain model
 *
 * @export
 * @interface IMealPlannerDomainModel
 * @typedef {IMealPlannerDomainModel}
 */
export interface IMealPlannerDomainModel {
  /**
   * id of meal planner
   *
   * @type {?string} _id - id of meal planner
   */
  _id?: string;
  /**
   * name of meal planner
   *
   * @type {string}
   */
  name: string;
  /**
   * amount of meal planner
   *
   * @type {{ ingredientId: IIngredientDomainModel['_id']; amount: number }[]} amount - array of ingredients
   */
  amount: { ingredientId: IIngredientDomainModel['_id']; amount: number }[];
  /**
   * notes of meal planner
   *
   * @type {string} notes - notes of meal planner
   */
  notes: string;
}
