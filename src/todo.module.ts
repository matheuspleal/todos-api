import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoRepository, TodoService],
})
export class TodoModule {}
