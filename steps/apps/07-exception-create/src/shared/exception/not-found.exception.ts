import { HttpStatus, NotFoundException } from "@nestjs/common";

export class ResourceNotFoundException extends NotFoundException {
    constructor(id: string) {
        super(`Todo with id ${id} does not exist.`, HttpStatus.NOT_FOUND as unknown as string);
    }
}
