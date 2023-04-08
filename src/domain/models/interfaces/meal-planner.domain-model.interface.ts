export interface IMealPlannerDomainModel {
  name: string;
  amount: { ingredientId: string; amount: number }[];
  notes: string;
}
