import { IIngredientService } from '@domain/services/';
import { IngredientRepository } from '@infrastructure/persistence';
import { Observable } from 'rxjs';
import { IngredientMongo } from '../schemas/ingredient.schema';
export class IngredientMongoService implements IIngredientService {
  constructor(private readonly ingredientRepository: IngredientRepository) {}
  create(entity: IngredientMongo): Observable<IngredientMongo> {
    return this.ingredientRepository.create(entity);
  }
  findById(id: string): Observable<IngredientMongo> {
    return this.ingredientRepository.findById(id);
  }
  update(id: string, ingredient: IngredientMongo): Observable<IngredientMongo> {
    return this.ingredientRepository.update(id, ingredient);
  }
  delete(id: string): Observable<IngredientMongo> {
    return this.ingredientRepository.delete(id);
  }
  findAll(): Observable<IngredientMongo[]> {
    return this.ingredientRepository.findAll();
  }
  findByName(name: string): Observable<IngredientMongo> {
    return this.ingredientRepository.findByName(name);
  }
}
