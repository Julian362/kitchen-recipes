export interface IUpdateRecipesDto {
  name?: string;
  description?: string;
  ingredients?: { amount: number; ingredientsId: string };
  photoUrl?: string;
  steps?: string[];
  notes?: string;
  servings?: number;
  nutritionInfo?: string;
}
