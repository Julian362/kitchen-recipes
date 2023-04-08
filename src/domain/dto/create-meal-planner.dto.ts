export interface ICreateMealPlannerDto {
  name: string;
  notes: string;
  amount: { ingredientId: string; amount: number }[];
}
