import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { TodosModule } from './feature/todos/todos.module';

@Module({
  imports: [TodosModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
