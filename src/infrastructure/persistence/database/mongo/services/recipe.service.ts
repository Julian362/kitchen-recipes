import { IRecipeService } from '@domain/services/recipes.service';
import { RecipeMongo } from '@infrastructure/persistence';
import { RecipeRepository } from '@infrastructure/persistence/database/mongo/repositories/recipe.repository';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class RecipeMongoService implements IRecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}
  create(entity: RecipeMongo): Observable<RecipeMongo> {
    return this.recipeRepository.create(entity);
  }
  findById(id: string): Observable<RecipeMongo> {
    return this.recipeRepository.findById(id);
  }
  update(id: string, recipe: RecipeMongo): Observable<RecipeMongo> {
    return this.recipeRepository.update(id, recipe);
  }
  delete(id: string): Observable<RecipeMongo> {
    return this.recipeRepository.delete(id);
  }

  findAllByUserId(id: string): Observable<RecipeMongo[]> {
    return this.recipeRepository.findAllByUserId(id);
  }
}
