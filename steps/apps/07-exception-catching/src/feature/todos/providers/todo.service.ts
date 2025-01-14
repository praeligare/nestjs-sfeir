import { Injectable } from '@nestjs/common';
import { TODOS_LIST } from '../constants/todos-list';
import { Todo } from '../models/todo.model';
import { ResourceNotFoundException } from '../../../shared/exception/not-found.exception';

@Injectable()
export class TodoService {
  getAllTodos(): Array<Todo> {
    return TODOS_LIST;
  }

  getTodo(idTodo: number): Todo {
    const todo = TODOS_LIST.find(({ id }) => id === idTodo);
    if (!todo) {
      throw new ResourceNotFoundException(idTodo);
    }
    return todo;
  }

  deleteTodo(idTodo: number): void {
    const indexTodo: number = TODOS_LIST.findIndex(({ id }) => id === idTodo);
    if (indexTodo === -1) throw new ResourceNotFoundException(idTodo);
    TODOS_LIST.splice(indexTodo, 1);
  }
}
