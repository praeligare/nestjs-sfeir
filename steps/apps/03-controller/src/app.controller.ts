import { Controller, Delete, Get, Param } from "@nestjs/common";
import { TODOS_LIST } from "./shared/constants/todos-list";
import { Todo } from "./shared/models/todo.model";

@Controller()
export class TodoController {
    @Get('api/todos')
    getTodos(): Array<Todo> {
        return TODOS_LIST;
    }
    @Get('api/todos/:id')
    get_todo(@Param('id') itemId: string) {
        return TODOS_LIST.find(({id}) => id === +itemId)
    }
    @Delete('api/todos/:id')
    remove_todo(@Param('id') itemId: string) {
        const index =  TODOS_LIST.findIndex(({id}) => id === +itemId)
        TODOS_LIST.splice(index, 1)
    }
}