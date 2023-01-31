import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('todo')
export class TodoController {
  todos = [
    {
      id: 'dsa',
      name: 'todo 1',
    },
    {
      id: 'asd',
      name: 'todo 2',
    },
  ];

  @Get()
  index(): any {
    return this.todos;
  }

  @Get(':id')
  show(@Param('id') id: string): any {
    return this.todos.find((item) => item.id === id);
  }

  @Post()
  store(@Body('name') name: string): any {
    return this.todos.push({
      id: (Math.random() + 1).toString(36).substring(7),
      name: name,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('name') name: string): any {
    const todo = this.todos.find((item) => item.id === id);
    todo.name = name;

    this.todos = [...this.todos.filter((item) => item.id !== id), todo];

    return todo;
  }

  @Delete(':id')
  delete(@Param('id') id: string): any {
    this.todos = [...this.todos.filter((item) => item.id !== id)];
  }
}
