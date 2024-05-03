import { BooksService } from './books.service';
import { Book } from './books.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Book[];
    findOne(id: string): Book;
    create(createBook: Book): Book;
    update(id: string, updateBook: Book): Book;
    remove(id: string): boolean;
}
