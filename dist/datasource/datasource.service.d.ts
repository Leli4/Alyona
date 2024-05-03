import { Book } from 'src/books/books.entity';
import { Author } from 'src/authors/authors.entity';
import { Order } from 'src/orders/order.entity';
export declare class DataSourceService {
    private books;
    private authors;
    private orders;
    getBooks(): Book[];
    getAuthors(): Author[];
    getOrders(): Order[];
}
