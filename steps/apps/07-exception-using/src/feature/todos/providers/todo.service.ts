import { Injectable, NotFoundException } from '@nestjs/common';
import { TODOS_LIST } from '../constants/todos-list';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  getAllTodos(): Array<Todo> {
    return TODOS_LIST;
  }

  getTodo(idTodo: number): Todo {
    const todo = TODOS_LIST.find(({ id }) => id === idTodo);
    if (!todo) throw new NotFoundException;
    else return todo;
  }

  deleteTodo(idTodo: number): void {
    const indexTodo: number = TODOS_LIST.findIndex(({ id }) => id === idTodo);
    if (indexTodo === -1) throw new NotFoundException;
    else TODOS_LIST.splice(indexTodo, 1);
  }
}
