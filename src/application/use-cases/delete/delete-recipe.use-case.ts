import { IUseCase } from '@application/interface';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for delete recipe
 *
 * @export
 * @class DeleteRecipeUseCase
 * @typedef {DeleteRecipeUseCase}
 * @implements {IUseCase}
 */
export class DeleteRecipeUseCase implements IUseCase {
  /**
   * Creates an instance of DeleteRecipeUseCase.
   *
   * @constructor
   * @param {IRecipeService} service recipe service
   */
  constructor(private readonly service: IRecipeService) {}

  /**
   * execute use case
   *
   * @public
   * @param {string} _id recipe id
   * @returns {Observable<RecipeDomainModel>} recipe domain model
   */
  public execute(_id: string): Observable<RecipeDomainModel> {
    return this.service.delete(_id);
  }
}
