import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  index() {
    // return 'hello world';
    return this.bookService.getAllBook();
  }

  @Post()
  store(
    @Req() req: Request,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    // return req.body;
    return this.bookService.createBook(title, author, category);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    // return 'PUT hello';
    return this.bookService.updateBook(id, title, author, category);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    // return 'DELETE Hello';
    return this.bookService.deleteBook(id);
  }
}
