import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.services';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
    this.todoService = new TodoService();
  }

  @Get()
  index(): Array<any> {
    return this.todoService.getAll();
  }

  @Get(':id')
  show(@Param('id') id: string): any {
    return this.todoService.getById(id);
  }

  @Post()
  store(@Body('name') name: string): any {
    return this.todoService.create(name);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('name') name: string): any {
    return this.todoService.update(id, name);
  }

  @Delete(':id')
  delete(@Param('id') id: string): any {
    return this.todoService.delete(id);
  }
}
