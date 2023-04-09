import { IUseCase } from '@application/interface/';
import { ICreateUserDto } from '@domain/dto';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { Observable, switchMap } from 'rxjs';

export class CreateUserUseCase implements IUseCase {
  constructor(
    private readonly service: IUserService,
    private readonly authService: IAuthService,
  ) {}

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
