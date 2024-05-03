import { AuthorsService } from './authors.service';
import { Author } from './authors.entity';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    findAll(): Author[];
    findOne(id: string): Author;
    create(createBook: Author): Author;
    update(id: string, updateAuthor: Author): Author;
    remove(id: string): boolean;
}
