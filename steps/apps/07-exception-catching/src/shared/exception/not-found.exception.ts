import { HttpException, HttpStatus } from '@nestjs/common';

export class ResourceNotFoundException<T> extends HttpException {
  constructor(idResource: T) {
    super(`Resource ${idResource} seems to not exist`, HttpStatus.NOT_FOUND);
  }
}
