/**
 * interface for update ingredient dto
 *
 * @export
 * @interface IUpdateIngredientDto
 * @typedef {IUpdateIngredientDto}
 */
export interface IUpdateIngredientDto {
  /**
   * name of ingredient
   *
   * @type {?string} name
   */
  name?: string;
  /**
   * description of ingredient
   *
   * @type {?string} description
   */
  description?: string;
  /**
   * unit of ingredient
   *
   * @type {?number} unit
   */
  unit?: number;
  /**
   * photo url of ingredient
   *
   * @type {?string} photoUrl
   */
  photoUrl?: string;
}
