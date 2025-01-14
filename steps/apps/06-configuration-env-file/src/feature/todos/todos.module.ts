import { Module } from '@nestjs/common';
import { TodoService } from './providers/todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService]
})
export class TodosModule {}
