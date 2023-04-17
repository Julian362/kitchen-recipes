import { IUseCase } from '@application/interface';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for get recipe
 *
 * @export
 * @class GetRecipeUseCase
 * @typedef {GetRecipeUseCase}
 * @implements {IUseCase}
 */
export class GetRecipeUseCase implements IUseCase {
  /**
   * Creates an instance of GetRecipeUseCase.
   *
   * @constructor
   * @param {IRecipeService} service recipe service
   */
  constructor(private readonly service: IRecipeService) {}

  /**
   * execute use case
   *
   * @param {string} _id recipe id
   * @returns {Observable<RecipeDomainModel>} recipe domain model
   */
  execute(_id: string): Observable<RecipeDomainModel> {
    return this.service.findById(_id);
  }
}
