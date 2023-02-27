import { Injectable, Param } from "@nestjs/common";
import { TODOS_LIST } from "./shared/constants/todos-list";
import { Todo } from "./shared/models/todo.model";

@Injectable()
export class TodoService {
    getTodos(): Array<Todo> {
        return TODOS_LIST
    }
    getTodo(@Param('id') idTodo: string): Todo {
        return TODOS_LIST.find(({ id }) => id === +idTodo);
    }
    removeTodo(@Param('id') idTodo: string): void {
        const indexTodo: number = TODOS_LIST.findIndex(({ id }) => id === +idTodo);
        TODOS_LIST.splice(indexTodo, 1);
    }
}