import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DataSourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [DataSourceModule]
})
export class BooksModule {}


