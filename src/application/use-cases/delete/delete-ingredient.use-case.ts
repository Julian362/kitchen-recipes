import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class DeleteIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  public execute(_id: string): Observable<IngredientDomainModel> {
    return this.service.delete(_id);
  }
}
