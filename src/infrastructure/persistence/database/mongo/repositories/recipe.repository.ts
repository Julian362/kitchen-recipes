import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { RecipeDocument, RecipeMongo } from '../schemas';
import { IBaseRepository } from './Interface';
import { IFindAll } from './Interface/find-all.interface';
import { IUpdateRepository } from './Interface/update.interface';

/**
 * class for recipe repository
 *
 * @export
 * @class RecipeRepository
 * @typedef {RecipeRepository}
 * @implements {IBaseRepository<RecipeMongo>}
 * @implements {IUpdateRepository<RecipeMongo>}
 * @implements {IFindAll<RecipeMongo>}
 */
@Injectable()
export class RecipeRepository
  implements
    IBaseRepository<RecipeMongo>,
    IUpdateRepository<RecipeMongo>,
    IFindAll<RecipeMongo>
{
  /**
   * Creates an instance of RecipeRepository.
   *
   * @constructor
   * @param {Model<RecipeDocument>} repository - recipe repository
   */
  constructor(
    @InjectModel(RecipeMongo.name)
    private readonly repository: Model<RecipeDocument>,
  ) {}
  /**
   * update recipe
   *
   * @param {string} _id - recipe id
   * @param {RecipeMongo} entity - recipe entity
   * @returns {Observable<RecipeMongo>} - recipe observable
   */
  update(_id: string, entity: RecipeMongo): Observable<RecipeMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity, { new: true }));
  }
  /**
   * create recipe
   *
   * @param {RecipeMongo} entity - recipe entity
   * @returns {Observable<RecipeMongo>} - recipe observable
   */
  create(entity: RecipeMongo): Observable<RecipeMongo> {
    return from(this.repository.create(entity));
  }
  /**
   * find recipe by id
   *
   * @param {string} document - recipe id
   * @returns {Observable<RecipeMongo>} - recipe observable
   */
  findById(document: string): Observable<RecipeMongo> {
    return from(this.repository.findById(document));
  }
  /**
   * delete recipe by id
   *
   * @param {string} _id - recipe id
   * @returns {Observable<RecipeMongo>} - recipe observable
   */
  delete(_id: string): Observable<RecipeMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }
  /**
   * find all recipes
   *
   * @returns {Observable<RecipeMongo[]>} - recipe observable
   */
  findAll(): Observable<RecipeMongo[]> {
    return from(this.repository.find()) as Observable<RecipeMongo[]>;
  }

  /**
   * find all recipes by user id
   *
   * @param {string} userId - user id
   * @returns {Observable<RecipeMongo[]>} - recipe observable
   */
  findAllByUserId(userId: string): Observable<RecipeMongo[]> {
    return from(this.repository.find({ userId: userId })) as Observable<
      RecipeMongo[]
    >;
  }
}
