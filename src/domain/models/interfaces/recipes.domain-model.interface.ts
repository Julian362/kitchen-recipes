import { IIngredientDomainModel } from './ingredient.domain-model.interface';
import { IUserDomainModel } from './user.domain-model.interface';

/**
 * interface for recipe domain model
 *
 * @export
 * @interface IRecipeDomainModel
 * @typedef {IRecipeDomainModel}
 */
export interface IRecipeDomainModel {
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
   * @type {{
   *  amount: number;
   *  ingredientId: IIngredientDomainModel['_id'];
   *}[]} ingredients - array of ingredients
   */
  ingredients: {
    amount: number;
    ingredientId: IIngredientDomainModel['_id'];
  }[];
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
   * @type {IUserDomainModel['_id']} userId
   */
  userId: IUserDomainModel['_id'];
}
