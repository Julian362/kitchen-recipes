import { ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { TokenExpiredError } from 'jsonwebtoken';
import { JwtErrorExceptionFilter } from '../jwt.exception-filter';

describe('MongoServerErrorExceptionFilter', () => {
  let filter: JwtErrorExceptionFilter;
  let host: ArgumentsHost;

  beforeEach(() => {
    filter = new JwtErrorExceptionFilter();
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    host = {
      switchToHttp: jest.fn().mockReturnThis(),
      getResponse: jest.fn().mockReturnValue(mockResponse),
    } as any as ArgumentsHost;
  });

  it('should catch TokenExpiredError and return response with conflict status', () => {
    // Arrange
    const exception = new TokenExpiredError('jwt expired', new Date());
    const expectedResponse = {
      statusCode: HttpStatus.CONFLICT,
      message: 'jwt expired',
      details: exception,
    };

    // Act
    filter.catch(exception, host);
    const response = host.switchToHttp().getResponse<Response>();

    // Assert
    expect(response.status).toHaveBeenCalledWith(HttpStatus.CONFLICT);
    expect(response.json).toHaveBeenCalledWith(expectedResponse);
  });
});
