import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create.book.dto';
import { UpdateBookDto } from './dto/update.book.dto';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBook(): any[] {
    return this.books;
  }

  //   createBook(title: string, author: string, category: string) {
  createBook(payload: CreateBookDto) {
    const newBook = {
      id: uuidv4(),
      title: payload.title,
      author: payload.author,
      category: payload.category,
    };
    this.books.push(newBook);

    return newBook;
  }

  //   updateBook(id: string, title: string, author: string, category: string) {
  updateBook(id: string, payload: UpdateBookDto) {
    const book = this.books.find((item) => item.id == id);
    if (book == undefined)
      throw new NotFoundException(`Book with id ${id} is not found`);
    book.title = payload.title;
    book.author = payload.author;
    book.category = payload.category;

    return book;
  }

  deleteBook(id: string) {
    const bookIndex = this.books.findIndex((item) => item.id == id);
    if (bookIndex == -1)
      throw new NotFoundException(`Book with id ${id} is not found`);
    const book = this.books[bookIndex];
    this.books.splice(bookIndex, 1);

    return book;
  }
}
