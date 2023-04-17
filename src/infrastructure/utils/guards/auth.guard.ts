import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

/**
 * interface for the auth guard
 *
 * @export
 * @class AuthGuard
 * @typedef {AuthGuard}
 * @implements {CanActivate}
 */
@Injectable()
export class AuthGuard implements CanActivate {
  /**
   * Creates an instance of AuthGuard.
   *
   * @constructor
   * @param {JwtService} jwtService - jwt service
   */
  constructor(private jwtService: JwtService) {}

  /**
   * can activate
   *
   * @param {ExecutionContext} context - execution context
   * @returns {Observable<boolean>} - boolean
   */
  canActivate(context: ExecutionContext): Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.login;
    const token = authHeader.split(' ')[0];
    return this.jwtService.verify(token);
  }
}
