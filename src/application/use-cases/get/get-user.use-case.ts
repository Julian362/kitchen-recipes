import { IUseCase } from '@application/interface';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { NotFoundException } from '@nestjs/common';
import { Observable, switchMap, throwError } from 'rxjs';

/**
 * use case for get user
 *
 * @export
 * @class GetUserUseCase
 * @typedef {GetUserUseCase}
 * @implements {IUseCase}
 */
export class GetUserUseCase implements IUseCase {
  /**
   * Creates an instance of GetUserUseCase.
   *
   * @constructor
   * @param {IUserService} service user service
   * @param {IAuthService} authService auth service
   */
  constructor(
    private readonly service: IUserService,
    private readonly authService: IAuthService,
  ) {}

  /**
   * execute use case
   *
   * @param {string} _id user id
   * @returns {Observable<{
   *  data: UserDomainModel;
   *  token: string;
   *}>} user domain model
   */
  execute(_id: string): Observable<{
    data: UserDomainModel;
    token: string;
  }> {
    return this.service.findById(_id).pipe(
      switchMap((user) => {
        return user
          ? this.authService.generateToken(user)
          : throwError(() => new NotFoundException('User not found'));
      }),
    );
  }
}
