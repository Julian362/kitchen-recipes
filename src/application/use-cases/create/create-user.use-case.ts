import { IUseCase } from '@application/interface/';
import { ICreateUserDto } from '@domain/dto';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { Observable } from 'rxjs';

export class CreateUserUseCase implements IUseCase {
  constructor(private readonly service: IUserService) {}

  execute(user: ICreateUserDto): Observable<UserDomainModel> {
    return this.service.create(user);
  }
}
