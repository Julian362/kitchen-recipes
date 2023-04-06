import { IIngredientDomainModel } from './ingredient.domain-model.interface';

export interface IRecipeDomainModel {
  name: string;
  description: string;
  ingredients: { amount: number; ingredient: IIngredientDomainModel }[];
  photoUrl: string;
  steps: string[];
  notes?: string;
  servings: number;
  nutritionInfo?: string;
}
