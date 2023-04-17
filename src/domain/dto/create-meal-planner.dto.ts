/**
 * interface for create meal planner dto
 *
 * @export
 * @interface ICreateMealPlannerDto
 * @typedef {ICreateMealPlannerDto}
 */
export interface ICreateMealPlannerDto {
  /**
   * name of meal planner
   *
   * @type {string} name
   */
  name: string;
  /**
   * notes of meal planner
   *
   * @type {string} notes
   */
  notes: string;
  /**
   * amount of meal planner
   *
   * @type {{ ingredientId: string; amount: number }[]} amount - array of ingredients
   */
  amount: { ingredientId: string; amount: number }[];
}
