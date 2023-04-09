import { JWTConstants } from '@infrastructure/services/secret';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.token;
    const token = authHeader.split(' ')[0];
    return this.jwtService.verify(token, {
      secret: JWTConstants.secret,
    });
  }
}
