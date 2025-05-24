import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { TodoService } from './todo.service';

export interface CreateTodoDTO {
  description: string;
}

export interface UpdateTodoDTO {
  description?: string;
  isCompleted?: boolean;
}

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() { description }: CreateTodoDTO) {
    return this.todoService.create(description);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() { description, isCompleted }: UpdateTodoDTO,
  ) {
    return this.todoService.update(id, description, isCompleted);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.delete(id);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }
}
