import { IMealPlannerService } from '@domain/services/meal-planner.service';
import { MealPlannerRepository } from '@infrastructure/persistence/database/mongo/repositories/meal-planner.repository';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MealPlannerMongo } from '../schemas/meal-planner.schema';
/**
 * Meal Planner Mongo Service
 *
 * @export
 * @class MealPlannerMongoService
 * @typedef {MealPlannerMongoService}
 * @implements {IMealPlannerService}
 */
@Injectable()
export class MealPlannerMongoService implements IMealPlannerService {
  /**
   * Creates an instance of MealPlannerMongoService.
   *
   * @constructor
   * @param {MealPlannerRepository} mealPlannerRepository - meal planner repository
   */
  constructor(private readonly mealPlannerRepository: MealPlannerRepository) {}

  /**
   * create a meal planner
   *
   * @param {MealPlannerMongo} entity - meal planner
   * @returns {Observable<MealPlannerMongo>} - meal planner
   */
  create(entity: MealPlannerMongo): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.create(entity);
  }
  /**
   * find by id meal planner
   *
   * @param {string} id - meal planner id
   * @returns {Observable<MealPlannerMongo>} - meal planner
   */
  findById(id: string): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.findById(id);
  }
  /**
   * update meal planner
   *
   * @param {string} id - meal planner id
   * @param {MealPlannerMongo} mealPlanner - meal planner
   * @returns {Observable<MealPlannerMongo>} - meal planner
   */
  update(
    id: string,
    mealPlanner: MealPlannerMongo,
  ): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.update(id, mealPlanner);
  }
  /**
   * delete meal planner
   *
   * @param {string} id - meal planner id
   * @returns {Observable<MealPlannerMongo>} - meal planner
   */
  delete(id: string): Observable<MealPlannerMongo> {
    return this.mealPlannerRepository.delete(id);
  }
}
