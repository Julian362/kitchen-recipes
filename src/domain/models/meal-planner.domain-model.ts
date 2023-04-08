import { IMealPlannerDomainModel } from './interfaces/meal-planner.domain-model.interface';

export class MealPlannerDomainModel implements IMealPlannerDomainModel {
  name: string;
  amount: { ingredientId: string; amount: number }[];
  notes: string;
}
