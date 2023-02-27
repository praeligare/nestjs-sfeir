import { Injectable, NotAcceptableException, PipeTransform } from "@nestjs/common";
import { Todo } from "../models/todo.model";

@Injectable()
export class TodoValidationPipe implements PipeTransform {
    transform(value: Partial<Todo>): Partial<Todo> | NotAcceptableException {
        const { userId } = value
        if ([1,2].includes(userId)) return value;
        throw new NotAcceptableException();
    }
}