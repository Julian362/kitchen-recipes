import { IUseCase } from '@application/interface';
import { ICreateIngredientDto } from '@domain/dto';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for create ingredient
 *
 * @export
 * @class CreateIngredientUseCase
 * @typedef {CreateIngredientUseCase}
 * @implements {IUseCase}
 */
export class CreateIngredientUseCase implements IUseCase {
  /**
   * Creates an instance of CreateIngredientUseCase.
   *
   * @constructor
   * @param {IIngredientService} service ingredient service
   */
  constructor(private readonly service: IIngredientService) {}

  /**
   * execute use case
   *
   * @param {ICreateIngredientDto} ingredient ingredient dto
   * @returns {Observable<IngredientDomainModel>} ingredient created
   */
  execute(ingredient: ICreateIngredientDto): Observable<IngredientDomainModel> {
    return this.service.create(ingredient);
  }
}
