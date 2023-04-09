import { Observable } from 'rxjs';
import { IUserDomainModel } from '..';

export interface IAuthService {
  generateToken(
    id: IUserDomainModel,
  ): Observable<{ data: IUserDomainModel; token: string }>;
}
