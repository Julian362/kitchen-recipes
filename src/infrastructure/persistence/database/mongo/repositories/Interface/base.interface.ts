import { Observable } from 'rxjs';

export interface IBaseRepository<Entity> {
  create(entity: Entity): Observable<Entity>;

  findById(document: string): Observable<Entity>;
}
