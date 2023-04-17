import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for get all ingredient
 *
 * @export
 * @class GetAllIngredientUseCase
 * @typedef {GetAllIngredientUseCase}
 * @implements {IUseCase}
 */
export class GetAllIngredientUseCase implements IUseCase {
  /**
   * Creates an instance of GetAllIngredientUseCase.
   *
   * @constructor
   * @param {IIngredientService} service ingredient service
   */
  constructor(private readonly service: IIngredientService) {}

  /**
   * execute use case
   *
   * @returns {Observable<IngredientDomainModel[]>} ingredient domain model
   */
  execute(): Observable<IngredientDomainModel[]> {
    return this.service.findAll();
  }
}
