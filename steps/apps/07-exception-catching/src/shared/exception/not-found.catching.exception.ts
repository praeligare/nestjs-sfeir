import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch()
export class ResourceNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        
        return response.status(exception.getStatus()).json({
            ...exception,
            time: new Date(),
            endpoint: request.url,
          });
    }
}
