import { IMealPlannerDomainModel } from './meal-planner.domain-model.interface';
import { IRecipeDomainModel } from './recipes.domain-model.interface';

export interface IUserDomainModel {
  recipes?: IRecipeDomainModel[];
  mealPlanner?: IMealPlannerDomainModel[];
  name: string;
  email: string;
  photoUrl: string;
  googleId: string;
}
