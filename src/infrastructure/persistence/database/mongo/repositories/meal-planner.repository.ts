import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import {
  MealPlannerDocument,
  MealPlannerMongo,
} from '../schemas/meal-planner.schema';
import { IBaseRepository } from './Interface';
import { IUpdateRepository } from './Interface/update.interface';

@Injectable()
export class MealPlannerRepository
  implements
    IBaseRepository<MealPlannerMongo>,
    IUpdateRepository<MealPlannerMongo>
{
  constructor(
    @InjectModel(MealPlannerMongo.name)
    private readonly repository: Model<MealPlannerDocument>,
  ) {}
  update(_id: string, entity: MealPlannerMongo): Observable<MealPlannerMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity, { new: true }));
  }

  create(entity: MealPlannerMongo): Observable<MealPlannerMongo> {
    return from(this.repository.create(entity));
  }

  findById(document: string): Observable<MealPlannerMongo> {
    return from(this.repository.findById(document));
  }

  delete(_id: string): Observable<MealPlannerMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }
}
