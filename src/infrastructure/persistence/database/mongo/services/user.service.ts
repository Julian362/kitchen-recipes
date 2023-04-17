import { IUserService } from '@domain/services/user.service';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories';
import { MealPlannerMongo } from '../schemas';
import { UserMongo } from '../schemas/user.schema';

/**
 * User Mongo Service
 *
 * @export
 * @class UserMongoService
 * @typedef {UserMongoService}
 * @implements {IUserService}
 */
@Injectable()
export class UserMongoService implements IUserService {
  /**
   * Creates an instance of UserMongoService.
   *
   * @constructor
   * @param {UserRepository} userRepository - user repository
   */
  constructor(private readonly userRepository: UserRepository) {}
  /**
   * create user
   *
   * @param {UserMongo} entity - user entity
   * @returns {Observable<UserMongo>} - user observable
   */
  create(entity: UserMongo): Observable<UserMongo> {
    return this.userRepository.create(entity);
  }
  /**
   * find user by id
   *
   * @param {string} id - user id
   * @returns {Observable<UserMongo>} - user observable
   */
  findById(id: string): Observable<UserMongo> {
    return this.userRepository.findById(id);
  }

  /**
   * delete user by id
   *
   * @param {string} id - user id
   * @returns {Observable<UserMongo>} - user observable
   */
  delete(id: string): Observable<UserMongo> {
    return this.userRepository.delete(id);
  }

  /**
   * update user
   *
   * @param {string} userId - user id
   * @param {MealPlannerMongo} mealPlanner - meal planner entity
   * @returns {Observable<UserMongo>} - user observable
   */
  addMealPlanner(
    userId: string,
    mealPlanner: MealPlannerMongo,
  ): Observable<UserMongo> {
    return this.userRepository.addMealPlanner(userId, mealPlanner);
  }
}
