export interface IUpdateMealPlannerDto {
  name?: string;
  amount?: { amount: number; ingredientId: string }[];
  notes?: string;
}
