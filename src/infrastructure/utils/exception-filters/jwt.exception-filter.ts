import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { TokenExpiredError } from 'jsonwebtoken';

/**
 * JwtErrorExceptionFilter class
 *
 * @export
 * @class JwtErrorExceptionFilter
 * @typedef {JwtErrorExceptionFilter}
 * @implements {ExceptionFilter<TokenExpiredError>}
 */
@Catch(TokenExpiredError)
export class JwtErrorExceptionFilter
  implements ExceptionFilter<TokenExpiredError>
{
  /**
   * Description placeholder
   *
   * @param {TokenExpiredError} exception
   * @param {ArgumentsHost} host
   */
  catch(exception: TokenExpiredError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const message = exception.message;
    const statusCode = HttpStatus.CONFLICT;
    const details = exception;

    response.status(statusCode).json({ statusCode, message, details });
  }
}
