import { IUseCase } from '@application/interface';
import { IUpdateIngredientDto } from '@domain/dto';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable, switchMap } from 'rxjs';

/**
 * update ingredient use case
 *
 * @export
 * @class UpdateIngredientUseCase
 * @typedef {UpdateIngredientUseCase}
 * @implements {IUseCase}
 */
export class UpdateIngredientUseCase implements IUseCase {
  /**
   * Creates an instance of UpdateIngredientUseCase.
   *
   * @constructor
   * @param {IIngredientService} service ingredient service
   */
  constructor(private readonly service: IIngredientService) {}

  /**
   * execute update ingredient
   *
   * @param {string} id - ingredient id
   * @param {IUpdateIngredientDto} ingredient - ingredient
   * @returns {Observable<IngredientDomainModel>} - ingredient
   */
  execute(
    id: string,
    ingredient: IUpdateIngredientDto,
  ): Observable<IngredientDomainModel> {
    return this.service.findById(id).pipe(
      switchMap((entity: IngredientDomainModel) => {
        const update = new IngredientDomainModel();
        update.name = ingredient.name || entity.name;
        update.description = ingredient.description || entity.description;
        update.photoUrl = ingredient.photoUrl || entity.photoUrl;
        return this.service.update(id, update);
      }),
    );
  }
}
