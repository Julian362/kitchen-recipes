import { IIngredientService } from '@domain/services/ingredient.service';
import { IngredientRepository } from '@infrastructure/persistence/database/mongo/repositories/ingredient.repository';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IngredientMongo } from '../schemas/ingredient.schema';
/**
 * Ingredient Mongo Service
 *
 * @export
 * @class IngredientMongoService
 * @typedef {IngredientMongoService}
 * @implements {IIngredientService}
 */
@Injectable()
export class IngredientMongoService implements IIngredientService {
  /**
   * Creates an instance of IngredientMongoService.
   *
   * @constructor
   * @param {IngredientRepository} ingredientRepository - ingredient repository
   */
  constructor(private readonly ingredientRepository: IngredientRepository) {}
  /**
   * create ingredient
   *
   * @param {IngredientMongo} entity - ingredient
   * @returns {Observable<IngredientMongo>} - ingredient
   */
  create(entity: IngredientMongo): Observable<IngredientMongo> {
    return this.ingredientRepository.create(entity);
  }
  /**
   * find by id ingredient
   *
   * @param {string} id - ingredient id
   * @returns {Observable<IngredientMongo>} - ingredient
   */
  findById(id: string): Observable<IngredientMongo> {
    return this.ingredientRepository.findById(id);
  }
  /**
   * update ingredient
   *
   * @param {string} id - ingredient id
   * @param {IngredientMongo} ingredient - ingredient
   * @returns {Observable<IngredientMongo>} - ingredient updated
   */
  update(id: string, ingredient: IngredientMongo): Observable<IngredientMongo> {
    return this.ingredientRepository.update(id, ingredient);
  }
  /**
   * delete ingredient
   *
   * @returns {Observable<IngredientMongo[]>} - ingredient deleted
   */
  findAll(): Observable<IngredientMongo[]> {
    return this.ingredientRepository.findAll();
  }
  /**
   * delete ingredient
   *
   * @param {string} name - ingredient name
   * @returns {Observable<IngredientMongo>} - ingredient deleted
   */
  findByName(name: string): Observable<IngredientMongo> {
    return this.ingredientRepository.findByName(name);
  }
}
