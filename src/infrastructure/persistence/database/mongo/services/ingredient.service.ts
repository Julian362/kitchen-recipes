import { IIngredientService } from '@domain/services/ingredient.service';
import { IngredientRepository } from '@infrastructure/persistence/database/mongo/repositories/ingredient.repository';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IngredientMongo } from '../schemas/ingredient.schema';
@Injectable()
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
  findAll(): Observable<IngredientMongo[]> {
    return this.ingredientRepository.findAll();
  }
  findByName(name: string): Observable<IngredientMongo> {
    return this.ingredientRepository.findByName(name);
  }
}
