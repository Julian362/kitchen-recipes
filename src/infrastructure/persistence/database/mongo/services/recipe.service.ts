import { IRecipeService } from '@domain/services/recipes.service';
import { RecipeMongo } from '@infrastructure/persistence';
import { RecipeRepository } from '@infrastructure/persistence/database/mongo/repositories/recipe.repository';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
/**
 * interface for the recipe service
 *
 * @export
 * @class RecipeMongoService
 * @typedef {RecipeMongoService}
 * @implements {IRecipeService}
 */
@Injectable()
export class RecipeMongoService implements IRecipeService {
  /**
   * Creates an instance of RecipeMongoService.
   *
   * @constructor
   * @param {RecipeRepository} recipeRepository - recipe repository
   */
  constructor(private readonly recipeRepository: RecipeRepository) {}
  /**
   * create a recipe
   *
   * @param {RecipeMongo} entity - recipe
   * @returns {Observable<RecipeMongo>} - recipe
   */
  create(entity: RecipeMongo): Observable<RecipeMongo> {
    return this.recipeRepository.create(entity);
  }
  /**
   * find by id recipe
   *
   * @param {string} id - recipe id
   * @returns {Observable<RecipeMongo>} - recipe
   */
  findById(id: string): Observable<RecipeMongo> {
    return this.recipeRepository.findById(id);
  }
  /**
   * update recipe
   *
   * @param {string} id  - recipe id
   * @param {RecipeMongo} recipe - recipe
   * @returns {Observable<RecipeMongo>} - recipe
   */
  update(id: string, recipe: RecipeMongo): Observable<RecipeMongo> {
    return this.recipeRepository.update(id, recipe);
  }
  /**
   * delete recipe
   *
   * @param {string} id - recipe id
   * @returns {Observable<RecipeMongo>} - recipe
   */
  delete(id: string): Observable<RecipeMongo> {
    return this.recipeRepository.delete(id);
  }

  /**
   * find all recipes by user id
   *
   * @param {string} id - user id
   * @returns {Observable<RecipeMongo[]>} - recipes
   */
  findAllByUserId(id: string): Observable<RecipeMongo[]> {
    return this.recipeRepository.findAllByUserId(id);
  }
}
