import { IngredientDomainModel } from './ingredient.domain-model';
import { IRecipeDomainModel } from './interfaces/recipes.domain-model.interface';

export class RecipeDomainModel implements IRecipeDomainModel {
  name: string;
  description: string;
  ingredients: { amount: number; ingredient: IngredientDomainModel };
  photoUrl: string;
  steps: string[];
  notes: string;
  servings: number;
  nutritionInfo: string;
}
