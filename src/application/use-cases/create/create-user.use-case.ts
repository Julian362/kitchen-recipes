import { IUseCase } from '@application/interface/';
import { ICreateUserDto } from '@domain/dto';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { Observable, switchMap } from 'rxjs';

/**
 * use case to create a user
 *
 * @export
 * @class CreateUserUseCase
 * @typedef {CreateUserUseCase}
 * @implements {IUseCase}
 */
export class CreateUserUseCase implements IUseCase {
  /**
   * creates an instance of CreateUserUseCase
   *
   * @constructor
   * @param {IUserService} service
   * @param {IAuthService} authService
   */
  constructor(
    private readonly service: IUserService,
    private readonly authService: IAuthService,
  ) {}

  /**
   * execute use case
   *
   * @param {ICreateUserDto} user - user to create
   * @returns {Observable<{
   *  data: UserDomainModel;
   *  token: string;
   * }>} - user created and token
   */
  execute(user: ICreateUserDto): Observable<{
    data: UserDomainModel;
    token: string;
  }> {
    return this.service.create(user).pipe(
      switchMap((user) => {
        return this.authService.generateToken(user);
      }),
    );
  }
}
