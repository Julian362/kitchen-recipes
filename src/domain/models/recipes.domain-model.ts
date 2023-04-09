import { IRecipeDomainModel } from './interfaces/recipes.domain-model.interface';

export class RecipeDomainModel implements IRecipeDomainModel {
  name: string;
  description: string;
  ingredients: { amount: number; ingredientId: string }[];
  photoUrl: string;
  steps: string[];
  notes?: string;
  servings: number;
  nutritionInfo?: string;
  userId: string;
}
