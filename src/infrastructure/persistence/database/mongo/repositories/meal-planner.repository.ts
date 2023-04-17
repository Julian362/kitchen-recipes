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

/**
 * class for meal planner repository
 *
 * @export
 * @class MealPlannerRepository
 * @typedef {MealPlannerRepository}
 * @implements {IBaseRepository<MealPlannerMongo>}
 * @implements {IUpdateRepository<MealPlannerMongo>}
 */
@Injectable()
export class MealPlannerRepository
  implements
    IBaseRepository<MealPlannerMongo>,
    IUpdateRepository<MealPlannerMongo>
{
  /**
   * Creates an instance of MealPlannerRepository.
   *
   * @constructor
   * @param {Model<MealPlannerDocument>} repository - meal planner repository
   */
  constructor(
    @InjectModel(MealPlannerMongo.name)
    private readonly repository: Model<MealPlannerDocument>,
  ) {}
  /**
   * update meal planner
   *
   * @param {string} _id - meal planner id
   * @param {MealPlannerMongo} entity - meal planner entity
   * @returns {Observable<MealPlannerMongo>} - meal planner observable
   */
  update(_id: string, entity: MealPlannerMongo): Observable<MealPlannerMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity, { new: true }));
  }

  /**
   * create meal planner
   *
   * @param {MealPlannerMongo} entity - meal planner entity
   * @returns {Observable<MealPlannerMongo>} - meal planner observable
   */
  create(entity: MealPlannerMongo): Observable<MealPlannerMongo> {
    return from(this.repository.create(entity));
  }

  /**
   * find meal planner by id
   *
   * @param {string} document - meal planner id
   * @returns {Observable<MealPlannerMongo>} - meal planner observable
   */
  findById(document: string): Observable<MealPlannerMongo> {
    return from(this.repository.findById(document));
  }

  /**
   * delete meal planner by id
   *
   * @param {string} _id - meal planner id
   * @returns {Observable<MealPlannerMongo>} - meal planner observable
   */
  delete(_id: string): Observable<MealPlannerMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }
}
