import { IUseCase } from '@application/interface';
import { IUpdateIngredientDto } from '@domain/dto';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class UpdateIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(
    id: string,
    ingredient: IUpdateIngredientDto,
  ): Observable<IngredientDomainModel> {
    return this.service.update(id, ingredient);
  }
}
