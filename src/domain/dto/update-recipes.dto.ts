/**
 * interface for update recipes dto
 *
 * @export
 * @interface IUpdateRecipesDto
 * @typedef {IUpdateRecipesDto}
 */
export interface IUpdateRecipesDto {
  /**
   * recipe id
   *
   * @type {?string} id
   */
  name?: string;
  /**
   * description of recipe
   *
   * @type {?string} description
   */
  description?: string;
  /**
   * ingredients of recipe
   *
   * @type {?{ amount: number; ingredientId: string }[]} ingredients - array of ingredients
   */
  ingredients?: { amount: number; ingredientId: string }[];
  /**
   * photo url of recipe
   *
   * @type {?string} photoUrl
   */
  photoUrl?: string;
  /**
   * steps of recipe
   *
   * @type {?string[]} steps - array of steps
   */
  steps?: string[];
  /**
   * notes of recipe
   *
   * @type {?string} notes
   */
  notes?: string;
  /**
   * servings of recipe
   *
   * @type {?number} servings
   */
  servings?: number;
  /**
   * nutrition info of recipe
   *
   * @type {?string}
   */
  nutritionInfo?: string;
}
