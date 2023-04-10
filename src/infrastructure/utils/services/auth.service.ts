import { IUserDomainModel } from '@domain/models';
import { IAuthService } from '@domain/services/auth.service';
import { UserModel } from '@infrastructure/models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly jwtService: JwtService) {}
  generateToken(user: IUserDomainModel): Observable<{
    data: UserModel;
    token: string;
  }> {
    return of({
      data: user,
      token: this.jwtService.sign({
        email: user.email,
        name: user.name,
      }),
    });
  }
}
