import { Injectable } from '@nestjs/common';

import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(description: string) {
    const newTodo = this.todoRepository.create(description);

    return newTodo;
  }

  update(id: number, description?: string, isCompleted?: boolean) {
    const updatedTodo = this.todoRepository.update(
      id,
      description,
      isCompleted,
    );

    return updatedTodo;
  }

  delete(id: number) {
    const deletedTodo = this.todoRepository.delete(id);

    return deletedTodo;
  }

  findAll() {
    const todos = this.todoRepository.findAll();

    return todos;
  }
}
