import { Controller, Delete, Get, HttpCode, Param, UseFilters } from '@nestjs/common';
import { ResourceNotFoundExceptionFilter } from '../../shared/exception/not-found.catching.exception';
import { Todo } from './models/todo.model';
import { TodoService } from './providers/todo.service';

@UseFilters(new ResourceNotFoundExceptionFilter())
@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id') idTodo: string): Todo {
    return this.todoService.getTodo(+idTodo);
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id') idTodo: string): void {
    this.todoService.deleteTodo(+idTodo);
    return;
  }
}
