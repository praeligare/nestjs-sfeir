import { Module } from '@nestjs/common';
import { TodoController } from './app.controller';
import { TodoService } from './app.service';

@Module({
  imports: [],
  providers: [TodoService],
  controllers: [TodoController],
})
export class AppModule { }
