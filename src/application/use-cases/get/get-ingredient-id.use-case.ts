import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for get ingredient by id
 *
 * @export
 * @class GetIngredientUseCase
 * @typedef {GetIngredientUseCase}
 * @implements {IUseCase}
 */
export class GetIngredientUseCase implements IUseCase {
  /**
   * Creates an instance of GetIngredientUseCase.
   *
   * @constructor
   * @param {IIngredientService} service ingredient service
   */
  constructor(private readonly service: IIngredientService) {}

  /**
   * execute use case
   *
   * @param {string} id ingredient id
   * @returns {Observable<IngredientDomainModel>} ingredient domain model
   */
  execute(id: string): Observable<IngredientDomainModel> {
    return this.service.findById(id);
  }
}
