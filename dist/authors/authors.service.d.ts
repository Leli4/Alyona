import { Author } from './authors.entity';
export declare class AuthorsService {
    private readonly authors;
    create(author: Author): Author;
    findAll(): Author[];
    findOne(id: number): Author;
    update(id: number, updatedAuthor: Author): Author;
    remove(id: number): boolean;
}
