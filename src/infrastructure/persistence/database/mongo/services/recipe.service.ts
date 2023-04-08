import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services/recipes.service';
import { RecipeRepository } from '@infrastructure/persistence/database/mongo/repositories/recipe.repository';
import { RecipeMongo } from '@infrastructure/persistence/database/mongo/schemas/recipe.schema';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class RecipeMongoService implements IRecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}
  create(entity: RecipeDomainModel): Observable<RecipeMongo> {
    return this.recipeRepository.create(entity);
  }
  findById(id: string): Observable<RecipeDomainModel> {
    return this.recipeRepository.findById(id);
  }
  update(id: string, recipe: RecipeDomainModel): Observable<RecipeDomainModel> {
    return this.recipeRepository.update(id, recipe);
  }
  delete(id: string): Observable<RecipeDomainModel> {
    return this.recipeRepository.delete(id);
  }
}
