import { Injectable } from '@nestjs/common';
import { Book } from 'src/books/books.entity';
import { Author } from 'src/authors/authors.entity';
import { Order } from 'src/orders/order.entity';

@Injectable()
export class DataSourceService {
  private books: Book[] = [];
  private authors: Author[] = [];
  private orders: Order[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  getOrders(): Order[] {
    return this.orders;
  }

}
