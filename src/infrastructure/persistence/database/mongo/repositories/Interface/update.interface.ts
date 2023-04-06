import { Observable } from 'rxjs';

export interface IUpdateRepository<Entity> {
  update(_id: string, entity: Entity): Observable<Entity>;
}
