import { Body, Controller, Delete, Get, HttpCode, HttpException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { TodoValidationPipe } from './pipes/todo.validation.pipe';
import { TodoService } from './providers/todo.service';

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
  getTodo(@Param('id', ParseIntPipe) idTodo: number): Todo {
    return this.todoService.getTodo(idTodo);
  }

  @Post()
  @HttpCode(201)
  addTodo(@Body(new TodoValidationPipe()) body: Todo): Todo | HttpException {
    return this.todoService.addTodo(body);
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id', ParseIntPipe) idTodo: number): void {
    this.todoService.deleteTodo(idTodo);
    return;
  }
}
