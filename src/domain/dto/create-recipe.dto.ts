export interface ICreateRecipeDto {
  name: string;
  description: string;
  ingredients: { amount: number; ingredient: string }[];
  photoUrl: string;
  steps: string[];
  notes: string;
  servings: number;
  nutritionInfo?: string;
}
