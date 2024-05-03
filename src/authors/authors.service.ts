import { Injectable } from '@nestjs/common';
import { Author } from './authors.entity';
@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [];

  create(author: Author): Author {
    this.authors.push(author);
    return author;
  }

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number): Author {
    return this.authors.find(authors => authors.id === id);
  }

  update(id: number, updatedAuthor: Author): Author {
    const index = this.authors.findIndex(authors => authors.id === id);
    this.authors[index] = updatedAuthor;
    return updatedAuthor;
  }

  remove(id: number): boolean {
    const index = this.authors.findIndex(authors => authors.id === id);
    if (index !== -1) {
      this.authors.splice(index, 1);
      return true;
    }
    return false;
  }
}