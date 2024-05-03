import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './authors.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }

  @Post()
  create(@Body() createBook: Author) {
    return this.authorsService.create(createBook);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthor: Author) {
    return this.authorsService.update(+id, updateAuthor);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
