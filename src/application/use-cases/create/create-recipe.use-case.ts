import { IUseCase } from '@application/interface';
import { ICreateRecipeDto } from '@domain/dto';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

export class CreateRecipeUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  execute(recipe: ICreateRecipeDto): Observable<RecipeDomainModel> {
    return this.service.create(recipe);
  }
}
