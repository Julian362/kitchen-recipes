import { MealPlannerDomainModel } from '@domain/models/meal-planner.domain-model';
import { Observable } from 'rxjs';

export interface IMealPlannerService<
  Entity extends MealPlannerDomainModel = MealPlannerDomainModel,
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  update(id: string, mealPlanner: Entity): Observable<Entity>;

  delete(id: string): Observable<Entity>;
}
