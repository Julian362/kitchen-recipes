import { IngredientDomainModel } from './ingredient.domain-model';
import { IMealPlannerDomainModel } from './interfaces/meal-planner.domain-model.interface';
import { RecipeDomainModel } from './recipes.domain-model';

export class MealPlannerDomainModel implements IMealPlannerDomainModel {
  name: string;
  menuDays: { day: string; recipes: RecipeDomainModel[] };
  amount: { ingredients: IngredientDomainModel; amount: number };
  notes: string;
}
