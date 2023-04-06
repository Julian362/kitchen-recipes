import { IUseCase } from '@application/interface';
import { ICreateMealPlannerDto } from '@domain/dto';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService } from '@domain/services';
import { Observable } from 'rxjs';

export class UpdateMealPlannerUseCase implements IUseCase {
  constructor(private readonly service: IMealPlannerService) {}

  execute(
    _id: string,
    mealPlanner: ICreateMealPlannerDto,
  ): Observable<MealPlannerDomainModel> {
    return this.service.update(_id, mealPlanner);
  }
}