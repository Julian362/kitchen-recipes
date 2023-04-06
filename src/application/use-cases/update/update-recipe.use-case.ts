import { IUseCase } from '@application/interface';
import { IUpdateRecipesDto } from '@domain/dto';
import { IRecipeService } from '@domain/services';

export class UpdateRecipeUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  execute(_id: string, recipe: IUpdateRecipesDto) {
    return this.service.update(_id, recipe);
  }
}
