import { IUseCase } from '@application/interface';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { Observable } from 'rxjs';

/**
 * use case for delete user
 *
 * @export
 * @class DeleteUserUseCase
 * @typedef {DeleteUserUseCase}
 * @implements {IUseCase}
 */
export class DeleteUserUseCase implements IUseCase {
  /**
   * Creates an instance of DeleteUserUseCase.
   *
   * @constructor
   * @param {IUserService} service user service
   */
  constructor(private readonly service: IUserService) {}

  /**
   * execute use case
   *
   * @param {string} _id user id
   * @returns {Observable<UserDomainModel>} user domain model
   */
  execute(_id: string): Observable<UserDomainModel> {
    return this.service.delete(_id);
  }
}
