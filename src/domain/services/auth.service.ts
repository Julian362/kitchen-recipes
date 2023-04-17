import { Observable } from 'rxjs';
import { IUserDomainModel } from '..';

/**
 * interface for the auth service
 *
 * @export
 * @interface IAuthService
 * @typedef {IAuthService}
 */
export interface IAuthService {
  /**
   * generate token
   *
   * @param {IUserDomainModel} id user id
   * @returns {Observable<{ data: IUserDomainModel; token: string }>} user domain model and token
   */
  generateToken(
    id: IUserDomainModel,
  ): Observable<{ data: IUserDomainModel; token: string }>;
}
