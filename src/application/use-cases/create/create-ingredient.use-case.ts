import { IUseCase } from '@application/interface';
import { ICreateIngredientDto } from '@domain/dto';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class CreateIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(ingredient: ICreateIngredientDto): Observable<IngredientDomainModel> {
    return this.service.create(ingredient);
  }
}
