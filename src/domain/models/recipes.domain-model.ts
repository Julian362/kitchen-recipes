import { IngredientDomainModel } from './ingredient.domain-model';
import { IRecipeDomainModel } from './interfaces/recipes.domain-model.interface';
import { UserDomainModel } from './user.domain-model';

/**
 * class for recipe domain model
 *
 * @export
 * @class RecipeDomainModel
 * @typedef {RecipeDomainModel}
 * @implements {IRecipeDomainModel}
 */
export class RecipeDomainModel implements IRecipeDomainModel {
  /**
   * id of recipe
   *
   * @type {?string} _id - id of recipe
   */
  _id?: string;
  /**
   * name of recipe
   *
   * @type {string} name
   */
  name: string;
  /**
   * description of recipe
   *
   * @type {string} description
   */
  description: string;
  /**
   * ingredients of recipe
   *
   * @type {{ amount: number; ingredientId: IngredientDomainModel['_id'] }[]} ingredients - array of ingredients
   */
  ingredients: { amount: number; ingredientId: IngredientDomainModel['_id'] }[];
  /**
   * photo url of recipe
   *
   * @type {string} photoUrl
   */
  photoUrl: string;
  /**
   * steps of recipe
   *
   * @type {string[]} steps - array of steps
   */
  steps: string[];
  /**
   * notes of recipe
   *
   * @type {?string} notes
   */
  notes?: string;
  /**
   * servings of recipe
   *
   * @type {number} servings
   */
  servings: number;
  /**
   * nutrition info of recipe
   *
   * @type {?string} nutritionInfo
   */
  nutritionInfo?: string;
  /**
   * user id of recipe
   *
   * @type {UserDomainModel['_id']} userId
   */
  userId: UserDomainModel['_id'];
}
