import { IUseCase } from '@application/interface';
import { IUpdateIngredientDto } from '@domain/dto';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable, switchMap } from 'rxjs';

export class UpdateIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

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
