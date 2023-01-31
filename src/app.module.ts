import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { TodosModule } from './todos/todo.module';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'todo',
      method: RequestMethod.POST,
    });
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'todo/*',
      method: RequestMethod.PUT,
    });
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'todo/*',
      method: RequestMethod.DELETE,
    });
  }
}
