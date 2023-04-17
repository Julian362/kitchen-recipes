import { IUseCase } from '@application/interface';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for get all recipes
 *
 * @export
 * @class GetAllRecipesUseCase
 * @typedef {GetAllRecipesUseCase}
 * @implements {IUseCase}
 */
export class GetAllRecipesUseCase implements IUseCase {
  /**
   * Creates an instance of GetAllRecipesUseCase.
   *
   * @constructor
   * @param {IRecipeService} service recipe service
   */
  constructor(private readonly service: IRecipeService) {}

  /**
   * execute use case
   *
   * @param {string} id user id
   * @returns {Observable<RecipeDomainModel[]>} recipe domain model
   */
  execute(id: string): Observable<RecipeDomainModel[]> {
    return this.service.findAllByUserId(id);
  }
}
