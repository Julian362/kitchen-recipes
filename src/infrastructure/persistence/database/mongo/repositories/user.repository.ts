import { IBaseRepository, MealPlannerMongo } from '@infrastructure/persistence';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { UserDocument, UserMongo } from '../schemas/user.schema';

/**
 * class user repository
 *
 * @export
 * @class UserRepository
 * @typedef {UserRepository}
 * @implements {IBaseRepository<UserMongo>}
 */
@Injectable()
export class UserRepository implements IBaseRepository<UserMongo> {
  /**
   * Creates an instance of UserRepository.
   *
   * @constructor
   * @param {Model<UserDocument>} repository - user repository
   */
  constructor(
    @InjectModel(UserMongo.name)
    private readonly repository: Model<UserDocument>,
  ) {}
  /**
   * create user repository
   *
   * @param {UserMongo} entity - user entity
   * @returns {Observable<UserMongo>} - user observable
   */
  create(entity: UserMongo): Observable<UserMongo> {
    return from(this.repository.create(entity));
  }
  /**
   * find user by id
   *
   * @param {string} id - user id
   * @returns {Observable<UserMongo>} - user observable
   */
  findById(id: string): Observable<UserMongo> {
    return from(this.repository.findOne({ googleId: id }));
  }
  /**
   * delete user by id
   *
   * @param {string} _id  - user id
   * @returns {Observable<UserMongo>} - user observable
   */
  delete(_id: string): Observable<UserMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }

  /**
   * add meal planner to user
   *
   * @param {string} _id - user id
   * @param {MealPlannerMongo} entity - meal planner entity
   * @returns {Observable<UserMongo>} - user observable
   */
  addMealPlanner(_id: string, entity: MealPlannerMongo): Observable<UserMongo> {
    return from(
      this.repository
        .findOneAndUpdate({ _id }, { mealPlannerId: entity._id }, { new: true })
        .exec(),
    );
  }
}
