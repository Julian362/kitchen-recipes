import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import {
  IngredientDocument,
  IngredientMongo,
} from '../schemas/ingredient.schema';
import { IBaseRepository } from './Interface';
import { IFindAll } from './Interface/find-all.interface';
import { IUpdateRepository } from './Interface/update.interface';

/**
 * class for ingredient repository
 *
 * @export
 * @class IngredientRepository
 * @typedef {IngredientRepository}
 * @implements {IBaseRepository<IngredientMongo>}
 * @implements {IUpdateRepository<IngredientMongo>}
 * @implements {IFindAll<IngredientMongo>}
 */
@Injectable()
export class IngredientRepository
  implements
    IBaseRepository<IngredientMongo>,
    IUpdateRepository<IngredientMongo>,
    IFindAll<IngredientMongo>
{
  /**
   * Creates an instance of IngredientRepository.
   *
   * @constructor
   * @param {Model<IngredientDocument>} repository - ingredient repository
   */
  constructor(
    @InjectModel(IngredientMongo.name)
    private readonly repository: Model<IngredientDocument>,
  ) {}
  /**
   * create ingredient
   *
   * @param {IngredientMongo} entity - ingredient entity
   * @returns {Observable<IngredientMongo>} - ingredient observable
   */
  create(entity: IngredientMongo): Observable<IngredientMongo> {
    return from(this.repository.create(entity));
  }
  /**
   * find ingredient by id
   *
   * @param {string} document - ingredient id
   * @returns {Observable<IngredientMongo>} - ingredient observable
   */
  findById(document: string): Observable<IngredientMongo> {
    return from(this.repository.findById(document));
  }
  /**
   * update ingredient
   *
   * @param {string} _id - ingredient id
   * @param {IngredientMongo} entity - ingredient entity
   * @returns {Observable<IngredientMongo>} - ingredient observable
   */
  update(_id: string, entity: IngredientMongo): Observable<IngredientMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity, { new: true }));
  }
  /**
   * find all ingredients
   *
   * @returns {Observable<IngredientMongo[]>} - ingredients observable
   */
  findAll(): Observable<IngredientMongo[]> {
    return from(this.repository.find().exec());
  }
  /**
   * find ingredient by name
   *
   * @param {string} name - ingredient name
   * @returns {Observable<IngredientMongo>} - ingredient observable
   */
  findByName(name: string): Observable<IngredientMongo> {
    return from(this.repository.findOne({ name }));
  }
}
