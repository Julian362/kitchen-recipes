import { UserDomainModel } from '@domain/models/user.domain-model';
import { Observable } from 'rxjs';
import { IMealPlannerDomainModel } from '..';

export interface IUserService<
  Entity extends UserDomainModel = UserDomainModel,
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  delete(id: string): Observable<Entity>;

  addMealPlanner(
    userId: string,
    mealPlanner: IMealPlannerDomainModel,
  ): Observable<Entity>;
}
