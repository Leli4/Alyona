import { Injectable } from '@nestjs/common';
import { Book } from './books.entity';
@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  create(book: Book): Book {
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find(book => book.id === id);
  }

  update(id: number, updatedBook: Book): Book {
    const index = this.books.findIndex(book => book.id === id);
    this.books[index] = updatedBook;
    return updatedBook;
  }

  remove(id: number): boolean {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}