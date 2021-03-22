import { Controller, Get, Render } from '@nestjs/common';
import axios from 'axios';
import { Todo } from '@nx-node-microservices/todos';
@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  async root() {
    return {
      todos: await this.getData(),
    };
  }

  async getData() {
    try {
      //const response = await axios.get<Todo[]>('http://localhost:3333/api');
      const response = await axios.get<Todo[]>(
        process.env.apiPath || 'http://localhost:3333'
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}
