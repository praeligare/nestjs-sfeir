import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TodoService } from "./providers/todo.service";

@Module({
    imports: [],
    controllers: [TodoController],
    providers: [TodoService],
    exports: [TodoService]
})
export class TodoModule {}