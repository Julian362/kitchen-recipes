import { IUseCase } from '@application/interface';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { NotFoundException } from '@nestjs/common';
import { Observable, switchMap, throwError } from 'rxjs';

export class GetUserUseCase implements IUseCase {
  constructor(
    private readonly service: IUserService,
    private readonly authService: IAuthService,
  ) {}

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
