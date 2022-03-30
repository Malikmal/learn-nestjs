import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): any {
    // return request;
    console.log(request.query);
    return this.appService.getHello();
  }

  @Get('/test/:id')
  getTest(@Req() request: Request): any {
    // throw new HttpException('wkwkwk', HttpStatus.NOT_FOUND);
    throw new HttpException(
      {
        message: 'asdlaksdasd',
        success: false,
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.NOT_FOUND,
    );
    console.log(request.params);
    return 'hello worldsslsld';
  }
}
