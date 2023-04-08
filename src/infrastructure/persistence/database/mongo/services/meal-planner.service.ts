import { IMealPlannerService } from '@domain/services/meal-planner.service';
import { MealPlannerRepository } from '@infrastructure/persistence/database/mongo/repositories/meal-planner.repository';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MealPlannerMongo } from '../schemas/meal-planner.schema';
@Injectable()
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
