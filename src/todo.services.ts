import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
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

  getAll(): Array<any> {
    return this.todos;
  }

  getById(id: string): any {
    return this.todos.find((item) => item.id === id);
  }

  create(name: string): any {
    return this.todos.push({
      id: (Math.random() + 1).toString(36).substring(7),
      name: name,
    });
  }

  update(id: string, name: string): any {
    const todo = this.todos.find((item) => item.id === id);
    todo.name = name;

    this.todos = [...this.todos.filter((item) => item.id !== id), todo];

    return todo;
  }

  delete(id: string): any {
    this.todos = [...this.todos.filter((item) => item.id !== id)];
  }
}
