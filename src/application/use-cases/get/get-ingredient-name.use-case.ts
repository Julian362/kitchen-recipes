import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for get ingredient by name
 *
 * @export
 * @class GetIngredientByNameUseCase
 * @typedef {GetIngredientByNameUseCase}
 * @implements {IUseCase}
 */
export class GetIngredientByNameUseCase implements IUseCase {
  /**
   * Creates an instance of GetIngredientByNameUseCase.
   *
   * @constructor
   * @param {IIngredientService} service ingredient service
   */
  constructor(private readonly service: IIngredientService) {}

  /**
   * execute use case
   *
   * @param {string} name ingredient name
   * @returns {Observable<IngredientDomainModel>} ingredient domain model
   */
  execute(name: string): Observable<IngredientDomainModel> {
    return this.service.findByName(name);
  }
}
