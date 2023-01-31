import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log({
      log: 'Request...',
      url: req.url,
      method: req.method,
      status: req.statusCode,
      originalUrl: req.originalUrl,
      query: req.query,
      params: req.params,
      body: req.body,
    });
    next();
  }
}
