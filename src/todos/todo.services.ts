import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
  todos: Todo[] = [
    {
      id: 'dsa',
      name: 'todo 1',
      createdAt: new Date(),
    },
    {
      id: 'asd',
      name: 'todo 2',
      createdAt: new Date(),
    },
  ];

  getAll(): Array<Todo> {
    return this.todos;
  }

  getById(id: string): Todo {
    return this.todos.find((item) => item.id === id);
  }

  create(todo: CreateTodoDto): Todo {
    const newTodo = {
      id: (Math.random() + 1).toString(36).substring(7),
      name: todo.name,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: string, todo: UpdateTodoDto): Todo {
    const updatedTodo = this.todos.find((item) => item.id === id);
    updatedTodo.name = todo.name;

    this.todos = [...this.todos.filter((item) => item.id !== id), updatedTodo];

    return updatedTodo;
  }

  delete(id: string): Todo {
    const todo = this.getById(id);
    this.todos = [...this.todos.filter((item) => item.id !== id)];
    return todo;
  }
}
