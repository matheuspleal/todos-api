import { Injectable } from '@nestjs/common';
import { TodoDTO } from './todo.dto';

@Injectable()
export class TodoRepository {
  private currentId = 1;
  private todos: TodoDTO[] = [];

  create(description: string) {
    const newTodo: TodoDTO = {
      id: this.currentId++,
      description,
      createdAt: new Date(),
      isCompleted: false,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  update(id: number, description?: string, isCompleted?: boolean) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const updatedDescription = description ?? this.todos[index].description;
      const updatedIsCompleted = isCompleted ?? this.todos[index].isCompleted;

      this.todos[index].description = updatedDescription;
      this.todos[index].isCompleted = updatedIsCompleted;

      return this.todos[index];
    }

    return null;
  }

  delete(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      return this.todos.splice(index, 1)[0];
    }

    return null;
  }

  findAll() {
    return this.todos;
  }
}
