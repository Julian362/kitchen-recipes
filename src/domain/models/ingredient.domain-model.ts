import { IIngredientDomainModel } from './interfaces/ingredient.domain-model.interface';

/**
 * class for IngredientDomainModel
 *
 * @export
 * @class IngredientDomainModel
 * @typedef {IngredientDomainModel}
 * @implements {IIngredientDomainModel}
 */
export class IngredientDomainModel implements IIngredientDomainModel {
  /**
   * id of ingredient
   *
   * @type {?string} _id - id of ingredient
   */
  _id?: string;
  /**
   * name of ingredient
   *
   * @type {string} name
   */
  name: string;
  /**
   * description of ingredient
   *
   * @type {string} description
   */
  description: string;
  /**
   * unit of ingredient
   *
   * @type {string} unit
   */
  photoUrl: string;
}
