import { IIngredientDomainModel } from './ingredient.domain-model.interface';
import { IRecipeDomainModel } from './recipes.domain-model.interface';

export interface IMealPlannerDomainModel {
  name: string;
  menuDays: { day: string; recipes: IRecipeDomainModel[] };
  amount: { ingredients: IIngredientDomainModel; amount: number };
  notes: string;
}
