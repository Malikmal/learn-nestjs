import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBook(): any[] {
    return this.books;
  }

  createBook(title: string, author: string, category: string) {
    const newBook = {
      id: uuidv4(),
      title: title,
      author: author,
      category: category,
    };
    this.books.push(newBook);

    return newBook;
  }

  updateBook(id: string, title: string, author: string, category: string) {
    const book = this.books.find((item) => item.id == id);
    book.title = title;
    book.author = author;
    book.category = category;

    return book;
  }

  deleteBook(id: string) {
    const bookIndex = this.books.findIndex((item) => item.id == id);
    const book = this.books[bookIndex];
    this.books.splice(bookIndex, 1);

    return book;
  }
}
