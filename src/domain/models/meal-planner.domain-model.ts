import { IngredientDomainModel } from './ingredient.domain-model';
import { IMealPlannerDomainModel } from './interfaces/meal-planner.domain-model.interface';

/**
 * class for meal planner domain model
 *
 * @export
 * @class MealPlannerDomainModel
 * @typedef {MealPlannerDomainModel}
 * @implements {IMealPlannerDomainModel}
 */
export class MealPlannerDomainModel implements IMealPlannerDomainModel {
  /**
   * id of meal planner
   *
   * @type {?string} _id - id of meal planner
   */
  _id?: string;
  /**
   * name of meal planner
   *
   * @type {string} name
   */
  name: string;
  /**
   * amount of meal planner
   *
   * @type {{ ingredientId: IngredientDomainModel['_id']; amount: number }[]} amount - array of ingredients
   */
  amount: { ingredientId: IngredientDomainModel['_id']; amount: number }[];
  /**
   * notes of meal planner
   *
   * @type {string} notes - notes of meal planner
   */
  notes: string;
}
