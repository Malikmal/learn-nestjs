import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.services';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  index(): Array<any> {
    return this.todoService.getAll();
  }

  @Get(':id')
  show(@Param('id') id: string): any {
    return this.todoService.getById(id);
  }

  @Post()
  store(@Body() todo: CreateTodoDto): any {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() todo: UpdateTodoDto): any {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string): any {
    return this.todoService.delete(id);
  }
}
