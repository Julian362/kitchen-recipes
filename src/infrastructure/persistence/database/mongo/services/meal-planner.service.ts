import { IMealPlannerService } from '@domain/services';
import { MealPlannerRepository } from '@infrastructure/persistence';
import { Observable } from 'rxjs';
import { MealPlannerMongo } from '../schemas/meal-planner.schema';

export class MealPlannerMongoService implements IMealPlannerService {
  constructor(private readonly mealPlannerRepository: MealPlannerRepository) {}

  create(entity: MealPlannerMongo): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.create(entity);
  }
  findById(id: string): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.findById(id);
  }
  update(
    id: string,
    mealPlanner: MealPlannerMongo,
  ): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.update(id, mealPlanner);
  }
  delete(id: string): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.delete(id);
  }
}
