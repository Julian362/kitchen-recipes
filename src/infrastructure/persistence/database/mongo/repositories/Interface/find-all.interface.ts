import { Observable } from 'rxjs';

export interface IFindAll<Entity> {
  findAll(): Observable<Entity[]>;
}
