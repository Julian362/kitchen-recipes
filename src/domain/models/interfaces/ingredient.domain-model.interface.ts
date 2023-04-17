/**
 * interface for IngredientDomainModel
 *
 * @export
 * @interface IIngredientDomainModel
 * @typedef {IIngredientDomainModel}
 */
export interface IIngredientDomainModel {
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
