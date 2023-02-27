import { Module } from '@nestjs/common';
import { TodoModule } from './feature/todos/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
