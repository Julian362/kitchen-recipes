/**
 * Update Meal Planner DTO
 *
 * @export
 * @interface IUpdateMealPlannerDto
 * @typedef {IUpdateMealPlannerDto}
 */
export interface IUpdateMealPlannerDto {
  /**
   *  Meal Planner name
   *
   * @type {?string}
   */
  name?: string;
  /**
   *  Meal Planner notes
   *
   * @type {?{ amount: number; ingredientId: string }[]} amount - array of ingredients
   */
  amount?: { amount: number; ingredientId: string }[];
  /**
   *  Meal Planner notes
   *
   * @type {?string} notes
   */
  notes?: string;
}
