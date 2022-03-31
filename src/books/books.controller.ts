import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create.book.dto';
import { UpdateBookDto } from './dto/update.book.dto';

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
    // @Req() req: Request,
    // @Body('title') title: string,
    // @Body('author') author: string,
    // @Body('category') category: string,
    @Body() payload: CreateBookDto,
  ) {
    // return req.body;
    // return this.bookService.createBook(title, author, category);
    return this.bookService.createBook(payload);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    // @Body('title') title: string,
    // @Body('author') author: string,
    // @Body('category') category: string,
    @Body() payload: UpdateBookDto,
  ) {
    // return 'PUT hello';
    // return this.bookService.updateBook(id, title, author, category);
    return this.bookService.updateBook(id, payload);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    // return 'DELETE Hello';
    return this.bookService.deleteBook(id);
  }
}
