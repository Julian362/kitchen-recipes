import { IngredientDomainModel } from '@domain/models/ingredient.domain-model';
import { Observable } from 'rxjs';

export interface IIngredientService<
  Entity extends IngredientDomainModel = IngredientDomainModel,
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  update(id: string, ingredient: Entity): Observable<Entity>;

  delete(id: string): Observable<Entity>;

  findAll(): Observable<Entity[]>;

  findByName(name: string): Observable<Entity>;
}
