import { IUserDomainModel } from './interfaces/user.domain-model.interface';
import { MealPlannerDomainModel } from './meal-planner.domain-model';
import { RecipeDomainModel } from './recipes.domain-model';

export class UserDomainModel implements IUserDomainModel {
  recipes: RecipeDomainModel[];
  mealPlanner: MealPlannerDomainModel[];
  name: string;
  email: string;
  photoUrl: string;
  googleId: string;
}
