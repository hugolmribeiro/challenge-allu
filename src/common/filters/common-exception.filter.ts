import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  RequestTimeoutException,
  UnprocessableEntityException,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

type ExceptionConstructor = new (...args: any[]) => HttpException;

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(CommonExceptionFilter.name);
  private readonly exceptionTypeMapping = new Map<ExceptionConstructor, number>(
    [
      [BadRequestException, HttpStatus.BAD_REQUEST],
      [UnauthorizedException, HttpStatus.UNAUTHORIZED],
      [NotFoundException, HttpStatus.NOT_FOUND],
      [ForbiddenException, HttpStatus.FORBIDDEN],
      [RequestTimeoutException, HttpStatus.REQUEST_TIMEOUT],
      [UnprocessableEntityException, HttpStatus.UNPROCESSABLE_ENTITY],
    ],
  );

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      this.exceptionTypeMapping.get(exception.constructor) ||
      HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.getResponse
      ? exception.getResponse()
      : 'Internal server error';

    this.logRequest(request, status, exception);

    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      error: exception.stack,
    });
  }

  private logRequest(request, status, exception) {
    this.logger.error({
      timestamp: new Date().toISOString(),
      method: request.method,
      path: request.url,
      status: status,
      error: exception.stack,
      message: exception.message,
      from: request.ip,
    });
  }
}
