import { Book } from './books.entity';
export declare class BooksService {
    private readonly books;
    create(book: Book): Book;
    findAll(): Book[];
    findOne(id: number): Book;
    update(id: number, updatedBook: Book): Book;
    remove(id: number): boolean;
}
