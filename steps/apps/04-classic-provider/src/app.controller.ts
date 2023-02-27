import { Controller, Delete, Get, HttpCode, Param } from '@nestjs/common';
import { TodoService } from './app.service';
import { Todo } from './shared/models/todo.model';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get()
  @HttpCode(200)
  getTodos(): Array<Todo> {
    return this.todoService.getTodos();
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id') itemId: string): Todo {
    return this.todoService.getTodo(itemId);
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id') itemId: string): void {
    return this.todoService.removeTodo(itemId);
  }
}
